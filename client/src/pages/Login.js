//REACT IMPORTS
import React, {useEffect} from 'react';

//AUTH
import Auth from '../utils/auth';

//GRAPHQL IMPORTS
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';

//import actions for login formstate reducer
import {
  loginEmailChange,
  loginEmailCompleted,
  loginPasswordChange,
  loginPasswordCompleted
} from '../actions/login-form-actions';


const Login = () => {
  //OBSERVE GLOBAL LOGIN FORM STATE
  const loginFormState = useSelector(state => state.loginForm)
  //console.log(loginFormState);
  //GRAB PIECE OF STATE
  const {
    email,
    emailIsComplete,
    password,
    passwordIsComplete
  } = loginFormState;

  //REDUX DISPATCH
  const dispatchREDUX = useDispatch();

  //GRAPHQL LOGIN MUTATION
  const [login, { error }] = useMutation(LOGIN);

  function handleChange(event) {
    if (event.target.type === 'email') {
      dispatchREDUX(loginEmailChange(event.target.value));
      dispatchREDUX(loginEmailCompleted(event.target.value));
    }
    if (event.target.type === 'password') {
      dispatchREDUX(loginPasswordChange(event.target.value));
      dispatchREDUX(loginPasswordCompleted(event.target.value));
    }
  }
  function enableLogin() {
    let object = {}

    if (emailIsComplete && passwordIsComplete) {
      object = {
        disable: false,
        formComplete: true
      }
      console.log(object);
      return object;
    } else {
      return true;
    }
  }
  function enableLoginEffect1() {
    let object = {}

    if (emailIsComplete && passwordIsComplete) {
      object = {
        disable: false,
        formComplete: true
      }
      return object;
    } else {
        object = {
          disable: false,
          formComplete: false
        }
        return object;
    }
  }

  useEffect(() => {
    function enableLoginEffect1() {
      let object = {}
  
      if (emailIsComplete && passwordIsComplete) {
        object = {
          disable: false,
          formComplete: true
        }
        return object;
      } else {
        object = {
          disable: false,
          formComplete: false
        }
        return object;
      }
    }
    enableLoginEffect1();
  }, [emailIsComplete, passwordIsComplete])


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const mutationResponse = await login
      (
        {
          variables: {
            email: email,
            password: password
          }
        }
      );
      const token = mutationResponse.data.login.token;
      //authorize token and send user to home page
      Auth.login(token);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div
        className="form-container"
      >
        <form 
          onSubmit={handleSubmit}
          className="form-card"
        >
          <label
            htmlFor="email"
            className="form-email"
          >
            Email: 
          </label>
          <input
            type="email"
            name="email"
            id="email-login"
            onChange={handleChange}
            placeholder="Your Email"
            className="form-email-input"
          />
          <label
            htmlFor="password"
            className="form-password"
          >
            Password:
          </label>
          <input 
            type="password"
            name="password"
            id="password-login"
            onChange={handleChange}
            placeholder="Your Password"
            className="form-password-input"
          />
          {//login error rendering
            error
            ?
            (
              <div
                style={{color: 'red'}}
              >
                The provided credentials were incorrect
              </div>
            )
            : null
          }
          <div
            className="form-button-container"
          >
            <button
              type="submit"
              disabled={emailIsComplete && passwordIsComplete ? false : true}
              className={emailIsComplete && passwordIsComplete ? 'form-btn' : ''}
            >
              Login
            </button>
          </div>
        </form>
     </div>
  </>
  );
};

export default Login;