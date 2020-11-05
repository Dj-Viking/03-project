const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Preset } = require('../models');
const { signToken } = require('../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      //make new url to redirect after success purchase
      // console.log(context.headers);
      const url = new URL(context.headers.referer).origin;
      console.log(url);

      const order = new Order//sending product ObjectID's in args.products
      (
        {
          products: args.products
        }
      );
      console.log(order);
      //not actually storing the order in the DB just using it as a way to
      // separate a product model from an order model
      const { products } = await order.populate('products').execPopulate();
      console.log(products);
      
      const line_items = [];
      for (let i = 0; i < products.length; i++) {
        //gen a product id
        const product = await stripe.products.create(
          {
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
            // images: [`https://picsum.photos/280/320?random=4`]
          }
        );

        //gen price id using the product id 
        const price = await stripe.prices.create(
          {
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          }
        );

        //add price id to the line items array
        line_items.push(
          {
            price: price.id,
            quantity: 1
          }
        );
      }
      //console.log(line_items);

      const session = await stripe.checkout.sessions.create(
        {
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          // success_url: `https://example.com/success?session_id={CHECKOUT_SESSION_ID}`,
          // cancel_url: `https://example.com/cancel`
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        }
      );

      return {
        session: session.id
      };
    }
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      console.log("checking context object when adding user");
      console.log(context);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context.user);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    /**
     * ADD PRESET STRING NAME MUTATION
     * @params {Object} parent
     * @params {Object} arguments arguments made by the query to represent variables in the mutation function
     * @params {Object} context Object which contains the user information tokens and such...not sure yet
    */
    addUserPreset: async (
      parent, 
      args, 
      context
    ) => {
      //find logged in user by context._id
      if (context.user) {
        console.log(context.user);
        return await User.findByIdAndUpdate
        (
          context.user._id,
          {
            $push: {
              presets: {
                presetName: args.presetName
              }
            }
          },
          {new: true}
        );
      }
    },
    updateProduct: async (
      parent,
       {/**variable input args to change database!!! *///update??but in here we're decrementing?? okay... 
         _id, 
         quantity 
      }) => 
    {
      const decrement = Math.abs(quantity) * -1;

      const user = await Product.findByIdAndUpdate(_id, 
        { 
          $inc: 
          { 
            quantity: decrement 
          } 
        }, 
        { 
            new: true 
        }
      );
      console.log(user);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;