(this["webpackJsonpled-matrix"]=this["webpackJsonpled-matrix"]||[]).push([[0],{110:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),o=n.n(r),c=n(56),i=n.n(c),s=(n(73),n(42)),l=n(15),u=n(131),d=n(103),p=n(32),b=n(39),m=n(70),j=new(function(){function e(){Object(p.a)(this,e)}return Object(b.a)(e,[{key:"getProfile",value:function(){return Object(m.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(m.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){var e=localStorage.getItem("id_token");return e||!1}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),f=(n(110),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{children:j.loggedIn()?Object(a.jsxs)("section",{style:{display:"flex",justifyContent:"center"},className:"nav-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)(s.b,{to:"/",style:{color:"white",textDecoration:"none"},className:"nav-button",children:Object(a.jsx)("span",{style:{textDecoration:"none",color:"white"},children:"Home"})})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/",style:{textDecoration:"none",color:"white",marginLeft:"5px"},className:"nav-button",onClick:function(){j.logout()},children:"Logout"})})]}):Object(a.jsxs)("section",{style:{display:"flex",justifyContent:"center"},className:"nav-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)(s.b,{to:"/",style:{color:"white",textDecoration:"none",marginRight:"5px",marginLeft:"5px"},className:"nav-button",children:"Home"})}),Object(a.jsx)("div",{children:Object(a.jsx)(s.b,{to:"/signup",style:{color:"white",textDecoration:"none",marginRight:"5px",marginLeft:"5px"},className:"nav-button",children:"Sign Up"})}),Object(a.jsx)("div",{children:Object(a.jsx)(s.b,{to:"/login",style:{color:"white",textDecoration:"none",marginLeft:"5px"},className:"nav-button",children:"Login"})})]})})})}),g=function(){return Object(a.jsxs)(a.Fragment,{children:[(j.loggedIn(),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{color:"white",textAlign:"center"},children:"LED Art Matrix"})})),Object(a.jsx)(f,{})]})},h=n(20),O=n(104),y=(n(115),n.p,n.p,n.p+"static/media/G6_-24_db_for_web_test.0318ec72.m4a");n(116);var x=function(){var e=Object(r.useState)(y),t=Object(h.a)(e,2),n=t[0],o=t[1],c=[{trackName:"g6",filePath:y}],i={textDecoration:"none",color:"white",cursor:"pointer",listStyle:"none",display:"inline",marginBottom:"10px",marginLeft:"auto",marginRight:"auto",padding:"10px 20px",justifyContent:"center",transition:"1s",borderRadius:"10px"},s={textShadow:"3px 3px 3px black",borderRadius:"10px",backgroundColor:"blue",cursor:"pointer",marginLeft:"auto",marginRight:"auto",padding:"10px 20px",listStyle:"none",display:"inline",marginBottom:"10px",justifyContent:"center",transition:"1s",border:"3px ridge blue"};function l(e){e.target.id!==n&&o(e.target.id)}var u=Object(r.useState)(.005),d=Object(h.a)(u,2),p=d[0],b=d[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{autoPlay:!0,preload:"auto",src:n,onPlay:function(e){return console.log("onPlay")},volume:p,onVolumeChange:function(e){!function(e,t){b(e.target.value||t)}(e,e.target.volume),b(e.target.volume)}}),Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(a.jsxs)("label",{htmlFor:"player-volume",style:{color:"white"},children:["Music Player Volume: ",p]})}),Object(a.jsxs)("section",{style:{display:"flex",flexDirection:"column",textAlign:"center",marginTop:"10px"},children:[Object(a.jsx)("div",{style:{borderTop:"ridge 5px rgb(67, 26, 163)",width:"80%",borderRadius:"50%",display:"flex",margin:"0 auto"}}),Object(a.jsx)("span",{style:{borderRadius:"50%",width:"80%",display:"flex",justifyContent:"center",margin:"0 auto",marginTop:"5px",marginBottom:"5px",color:"white"},children:"Track List"}),c.map((function(e){return Object(a.jsx)("div",{style:n===e.filePath?s:i,className:n===e.filePath?"anim-playing-text":"",id:e.filePath,onClick:l,children:e.trackName},e.trackName)}))]})]})},v=n(16),w=n.n(v),N=n(31),S=n(17),_=(n(118),n(119),n(120),n(121),n(122),n(123),n(40));n(124);function E(e,t){var n=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-n)+n)}function C(e,t,n){return new Promise((function(a,r){var o,c,i,s=window.indexedDB.open("led-matrix",1);s.onupgradeneeded=function(e){var t=s.result;t.createObjectStore("defaultPreset",{keyPath:"_id"}),t.createObjectStore("gifs",{keyPath:"_id"})},s.onerror=function(e){console.log(e),console.log("error creating object store for idb...")},s.onsuccess=function(r){switch(o=s.result,c=o.transaction(e,"readwrite"),i=c.objectStore(e),o.onerror=function(e){console.log("there was an error on success instance method upon execution",e)},t){case"put":i.put(n),a(n);break;case"get":var l=i.getAll();l.onsuccess=function(){return a(l.result)};break;case"delete":i.delete(n._id);break;default:l.onerror=function(){console.log("Not a valid method passed into the function executing this code...")}}c.oncomplete=function(){o.close()}}}))}var I=n(34),P=n(18),A=n.n(P);function k(){var e=Object(I.a)(["\n  {\n    getGifsCreateAndOrUpdate{\n      _id\n      gifSrc\n      gifCategory\n      limit\n    }\n  }\n"]);return k=function(){return e},e}function D(){var e=Object(I.a)(["\n  {\n    getSearchTerms{\n      _id\n      termText\n      termCategory\n      limit\n    }\n  }\n"]);return D=function(){return e},e}function T(){var e=Object(I.a)(["\n\n  {\n    getPresets{\n      _id\n      presetName\n    }\n  }\n"]);return T=function(){return e},e}function L(){var e=Object(I.a)(["\n{\n  user\n  {\n    _id\n    username\n    email\n    orders{\n      _id\n    }\n    presets {\n      _id\n      presetName\n    }\n    defaultPreset\n    userSearchTerm\n  }\n}\n"]);return L=function(){return e},e}var G=A()(L()),M=A()(T()),U=(A()(D()),A()(k()));function R(){var e=Object(I.a)(["\n  mutation updateUserSearchTerm\n  (\n    $userSearchTerm: ID!\n  ){\n    updateUserSearchTerm\n    (\n      userSearchTerm: $userSearchTerm\n    ){\n      username\n      _id\n      searchTerm{\n        termText\n        limit\n        termCategory\n      }\n    }\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(I.a)(["\n  mutation updateUserDefaultPreset\n  (\n    $_id: ID!,\n  )\n  {\n    updateUserDefaultPreset\n    (\n      _id: $_id,\n    )\n    {\n      _id\n      username\n      email\n      defaultPreset,\n      presets {\n        _id\n        presetName\n      }\n    }\n  }\n"]);return F=function(){return e},e}function H(){var e=Object(I.a)(["\n  mutation addUserPreset\n  (\n    $presetName: String!\n  )\n  {\n    addUserPreset\n    ( \n      presetName: $presetName\n    )\n    {\n      _id\n      username\n      email\n      presets {\n        _id\n        presetName\n      }\n      defaultPreset\n    }\n  }\n"]);return H=function(){return e},e}function W(){var e=Object(I.a)(["\n  mutation addUser\n  (\n    $username: String!,\n    $email: String!,\n    $password: String!\n  )\n  {\n    addUser\n    (\n      username: $username,\n      email: $email,\n      password: $password\n    )\n    {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return W=function(){return e},e}function $(){var e=Object(I.a)(["\n  mutation login\n  (\n    $email: String!,\n    $password: String!\n  )\n  {\n    login\n    (\n      email: $email,\n      password: $password\n    )\n    {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return $=function(){return e},e}var V=A()($()),B=A()(W()),z=(A()(H()),A()(F())),X=(A()(R()),n(23)),Y=function(e){return{type:"GET_GIFS",payload:e}},K=function(){var e=Object(S.c)({config:S.b.wobbly,delay:100,from:{opacity:0,marginRight:"1000px"},to:{opacity:1,marginRight:"5px"}}),t=Object(S.c)({config:S.b.wobbly,delay:100,from:{opacity:0},to:{opacity:1}}),n=Object(X.b)(),o=Object(u.useQuery)(U);Object(r.useEffect)((function(){if(o.data){function e(){return(e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.resolve(C("gifs","get")).then(function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("got the idb gifs"),console.log(t),console.log("updating if only it does not exist yet on the browser idb store..."),void 0===t[0]?o.data.getGifsCreateAndOrUpdate.forEach((function(e){return console.log("updating idb gifs..."),C("gifs","put",e)})):(console.log("exists already deleting current store and making new one"),Promise.resolve(C("gifs","get")).then(function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("deleting current idb gifs..."),console.log(t),t.forEach((function(e){return C("gifs","delete",e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)})),o.data.getGifsCreateAndOrUpdate.forEach((function(e){return console.log("updating current gifs..."),C("gifs","put",e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(o),n(Y(o.data.getGifsCreateAndOrUpdate)),console.log(Promise.resolve(function(){return e.apply(this,arguments)}()).then((function(e){return console.log(e)})))}else o.data||Promise.resolve(C("gifs","get")).then(function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);try{n(Y(Object(_.a)(t)))}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}),[o,n,o.data]);var c=Object(X.c)((function(e){return e.artScroller})).gifs;function i(e){return s.apply(this,arguments)}function s(){return(s=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.persist(),console.log(t.key),!1===F&&H(!0);try{"w"===t.key||console.log(t.target.parentElement),o.refetch()}catch(a){console.log(a)}finally{navigator in window&&!1===window.navigator.onLine&&(console.log("navigator"),console.log("refetch failed pulling from idb"),Promise.resolve(C("gifs","get")).then((function(e){console.log("trying to get from idb since refetch failed"),n(Y(Object(_.a)(e)))})).catch((function(e){return console.log(e)})))}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=Object(r.useState)("30"),d=Object(h.a)(l,2),p=d[0],b=d[1];var m=Object(r.useState)("50"),j=Object(h.a)(m,2),f=j[0],g=j[1];var O=Object(r.useState)("33.4"),y=Object(h.a)(O,2),x=y[0],v=y[1];var I=Object(r.useState)("30"),P=Object(h.a)(I,2),A=P[0],k=P[1];var D=Object(r.useState)(0),T=Object(h.a)(D,2),L=T[0],G=T[1];var M=Object(r.useState)(!1),R=Object(h.a)(M,2),F=R[0],H=R[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("main",{style:{display:"flex",flexDirection:"column"},children:Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{className:"border-top-artScroller"}),Object(a.jsx)("span",{style:{color:"white",textAlign:"center"},children:"Art Scroller Controls"}),Object(a.jsxs)("div",{className:"preset-button-container",children:[Object(a.jsx)(S.a.button,{style:e,className:"scroller-fetch-button",onClick:i,onKeyPress:i,children:"Start Art Scroller!"}),Object(a.jsx)(S.a.button,{style:t,className:F?"scroller-toggle-button-on":"scroller-toggle-button-off",onClick:function(e){H(!F)},children:F?Object(a.jsx)("span",{style:{color:"white"},children:"Turn Off Scroller"}):Object(a.jsx)("span",{style:{color:"white"},children:"Turn On Scroller"})})]}),Object(a.jsxs)("div",{className:"slider-container",children:[Object(a.jsxs)("label",{htmlFor:"scroller-circle-width",style:{color:"white"},children:["Scroller Circle Width: ",A]}),Object(a.jsx)("input",{name:"scroller-circle-width",className:"slider-style",type:"range",min:"0",max:"100",value:A,onChange:function(e){k(e.target.value)}}),Object(a.jsxs)("label",{htmlFor:"vertical-positioning",style:{color:"white"},children:["Scroller Vert Positioning: ",f]}),Object(a.jsx)("input",{name:"vertical-positioning",className:"slider-style",type:"range",min:"0",max:"200",value:f,onChange:function(e){g(e.target.value)}}),Object(a.jsxs)("label",{htmlFor:"horizontal-positioning",style:{color:"white"},children:["Scroller Horizontal Positioning: ",x/1e3]}),Object(a.jsx)("input",{name:"horizontal-positioning",className:"slider-style",type:"range",min:"0",max:"100",value:x,onChange:function(e){v(e.target.value)}}),Object(a.jsxs)("label",{htmlFor:"invert",style:{color:"white"},children:["Invert Colors: ",L/100]}),Object(a.jsx)("input",{className:"slider-style",name:"invert",type:"range",min:"0",max:"100",value:L,onChange:function(e){G(e.target.value)}}),Object(a.jsxs)("label",{htmlFor:"animation-duration",style:{color:"white"},children:["Scroll Speed: ",p/100]}),Object(a.jsx)("input",{className:"slider-style",name:"animation-duration",type:"range",min:"1",max:"100",value:p,onChange:function(e){b(e.target.value)}})]}),Object(a.jsx)("figure",{style:{display:"".concat(F?"block":"none"),margin:"0"},className:"figure-transition-style",children:c&&c.map((function(e,t){return Object(a.jsx)("img",{alt:"gif-".concat(t),src:e.gifSrc,style:{position:"absolute",zIndex:"1",filter:"invert(".concat(L/100,")"),borderRadius:"50%",animationName:"scrollAnim",animationDuration:"".concat(p/100*(t+E(t,20)),"s"),animationDelay:"0.".concat(t+1),animationTimingFunction:"ease-in",animationDirection:"reverse",animationIterationCount:"infinite",top:"".concat(f,"vh"),width:"".concat(A,"vw"),left:"".concat(x,"vw")},className:"scroller-media"},e._id)}))})]})})})},Q=function(e){return{type:"PRESET_SWITCH",payload:e}},q=function(){var e=Object(S.c)({delay:1e3,from:{opacity:0},to:{opacity:1}}),t=Object(S.c)({delay:1300,from:{opacity:0},to:{opacity:1}}),n=Object(S.c)({delay:1500,from:{opacity:0},to:{opacity:1}}),o=Object(S.c)({delay:1700,from:{opacity:0},to:{opacity:1}}),c=Object(S.c)({delay:2e3,from:{opacity:0},to:{opacity:1}}),i=Object(S.c)({delay:2300,from:{opacity:0},to:{opacity:1}}),s=Object(X.b)(),l=Object(u.useQuery)(G),d=Object(u.useQuery)(M);Object(r.useEffect)((function(){if(d.data&&l.data)for(var e=0;e<d.data.getPresets.length;e++)d.data.getPresets[e]._id===l.data.user.defaultPreset&&s(Q(d.data.getPresets[e].presetName))}),[d,l,s]);var p=Object(X.c)((function(e){return e.ledChange})).presetName,b=[];var m=[];var f=Object(u.useMutation)(z),g=Object(h.a)(f,1)[0];function O(){return(O=Object(N.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.persist(),n=t.target.parentElement.parentElement.parentElement.children[1].firstChild.firstChild.className.split("led1-1")[1],a=0;case 4:if(!(a<d.data.getPresets.length)){e.next=22;break}if(n!==d.data.getPresets[a].presetName){e.next=18;break}return console.log(d.data.getPresets[a].presetName),e.prev=7,e.next=10,g({variables:{_id:d.data.getPresets[a]._id}});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.error(e.t0);case 15:console.log("preset saved"),e.next=19;break;case 18:console.log("updating...");case 19:a++,e.next=4;break;case 22:case"end":return e.stop()}}),e,null,[[7,12]])})))).apply(this,arguments)}return function(){for(var e=1;e<33;e++)b.push({ledNumber:e})}(),function(e){for(var t=1;t<e;t++)m.push({rowNumber:t})}(33),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{className:"box-style",children:[Object(a.jsxs)("section",{style:{position:"relative",display:"flex",textAlign:"center",flexDirection:"column"},children:[Object(a.jsx)(K,{}),Object(a.jsx)("div",{className:"border-top-led"}),Object(a.jsx)("span",{style:{color:"white",textAlign:"center"},children:"LED Matrix Presets"}),!j.loggedIn()&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("span",{style:{color:"white"},children:"To see the Disabled Presets, Log in or Sign up! Also save your own Default Preset!"})}),Object(a.jsxs)("div",{className:"preset-button-container",children:[Object(a.jsx)(S.a.button,{style:e,className:"preset-button rainbow-anim",onClick:function(){s(Q(""))},children:Object(a.jsx)("span",{className:"preset-button-text",children:"rainbowTest"})}),Object(a.jsx)(S.a.button,{style:t,className:"preset-button",onClick:function(){s(Q("V2"))},children:Object(a.jsx)("span",{className:"preset-button-text",style:{width:"100%"},children:"V2"})}),Object(a.jsx)(S.a.button,{style:n,className:j.loggedIn()?"preset-button":"preset-button-disabled",disabled:!j.loggedIn(),onClick:function(){s(Q("waves"))},children:Object(a.jsx)("span",{className:"preset-button-text",children:"waves"})}),Object(a.jsx)(S.a.button,{style:o,className:j.loggedIn()?"preset-button":"preset-button-disabled",disabled:!j.loggedIn(),onClick:function(){s(Q("spiral"))},children:Object(a.jsx)("span",{className:"preset-button-text",children:"spiral"})}),Object(a.jsx)(S.a.button,{style:c,className:j.loggedIn()?"preset-button":"preset-button-disabled",disabled:!j.loggedIn(),onClick:function(){s(Q("fourSpirals"))},children:Object(a.jsx)("span",{className:"preset-button-text",children:"fourSpirals"})}),Object(a.jsx)(S.a.button,{style:i,className:j.loggedIn()?"preset-button save-button":"preset-button-disabled",disabled:!j.loggedIn(),onClick:function(e){return O.apply(this,arguments)},children:"Save as Default"})]})]}),Object(a.jsx)("section",{className:"led-matrix-container",children:m.map((function(e,t){return Object(a.jsx)("div",{className:"row".concat(t+1),children:b.map((function(t,n){return Object(a.jsx)("div",{className:"led".concat(n+1,"-").concat(e.rowNumber).concat((j.loggedIn(),p)),style:{}},"led".concat(t.ledNumber,"-").concat(n+1))}))},"row".concat(t+1))}))})]})})},J=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{}),Object(a.jsx)(q,{})]})},Z=function(){var e=Object(X.c)((function(e){return e.loginForm})),t=e.email,n=(e.emailIsComplete,e.password),r=(e.passwordIsComplete,Object(X.b)()),o=Object(u.useMutation)(V),c=Object(h.a)(o,2),i=c[0],s=c[1].error;function l(e){"email"===e.target.type&&(r({type:"LOGIN_EMAIL_CHANGE",payload:e.target.value}),r(function(e){return e.length>0?{type:"LOGIN_EMAIL_COMPLETED",payload:!0}:{type:"LOGIN_EMAIL_COMPLETED",payload:!1}}(e.target.value))),"password"===e.target.type&&(r(function(e){return{type:"LOGIN_PASSWORD_CHANGE",payload:e}}(e.target.value)),r(function(e){return e.length>0?{type:"LOGIN_PASSWORD_COMPLETED",payload:!0}:{type:"LOGIN_PASSWORD_COMPLETED",payload:!1}}(e.target.value)))}function d(){return(d=Object(N.a)(w.a.mark((function e(a){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,i({variables:{email:t,password:n}});case 4:r=e.sent,o=r.data.login.token,j.login(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"form-container",children:Object(a.jsxs)("form",{onSubmit:function(e){return d.apply(this,arguments)},className:"form-card",children:[Object(a.jsx)("label",{htmlFor:"email",className:"form-email-label",children:"Email:"}),Object(a.jsx)("input",{type:"email",name:"email",id:"email-login",onChange:l,placeholder:"Your Email",className:"form-email-input",autoComplete:"off"}),Object(a.jsx)("label",{htmlFor:"password",className:"form-password-label",children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password-login",onChange:l,placeholder:"Your Password",className:"form-password-input",autoComplete:"off"}),s?Object(a.jsx)("div",{style:{color:"red"},children:"The provided credentials were incorrect"}):null,Object(a.jsx)("div",{className:"form-button-container",children:Object(a.jsx)("button",{type:"submit",disabled:!1,className:"form-btn",children:"Login"})})]})})})},ee=function(){var e=Object(X.c)((function(e){return e.signupForm})),t=e.username,n=e.email,r=e.password,o=(e.usernameIsComplete,e.emailIsComplete,e.passwordIsComplete,Object(X.b)()),c=Object(u.useMutation)(B),i=Object(h.a)(c,2),s=i[0],l=i[1].error;function d(){return(d=Object(N.a)(w.a.mark((function e(a){var o,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,s({variables:{username:t,email:n,password:r}});case 4:o=e.sent,c=o.data.addUser.token,j.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(e){"text"===e.target.type&&(o({type:"SIGNUP_USERNAME_CHANGE",payload:e.target.value}),o(function(e){return e.length>0?{type:"SIGNUP_USERNAME_COMPLETED",payload:!0}:{type:"SIGNUP_USERNAME_COMPLETED",payload:!1}}(e.target.value))),"email"===e.target.type&&(o(function(e){return{type:"SIGNUP_EMAIL_CHANGE",payload:e}}(e.target.value)),o(function(e){return e.length>0?{type:"SIGNUP_EMAIL_COMPLETED",payload:!0}:{type:"SIGNUP_EMAIL_COMPLETED",payload:!1}}(e.target.value))),"password"===e.target.type&&(o(function(e){return{type:"SIGNUP_PASSWORD_CHANGE",payload:e}}(e.target.value)),o(function(e){return e.length>0?{type:"SIGNUP_PASSWORD_COMPLETED",payload:!0}:{type:"SIGNUP_PASSWORD_COMPLETED",payload:!1}}(e.target.value)))}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"form-container",children:Object(a.jsxs)("form",{className:"form-card",onSubmit:function(e){return d.apply(this,arguments)},children:[Object(a.jsx)("label",{htmlFor:"username",className:"form-username-label",children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",onChange:p,placeholder:"Username",className:"form-username-input",autoComplete:"off"}),Object(a.jsx)("label",{htmlFor:"email",className:"form-email-label",children:"Email:"}),Object(a.jsx)("input",{type:"email",name:"email",onChange:p,placeholder:"Email",className:"form-email-input",autoComplete:"off"}),Object(a.jsx)("label",{htmlFor:"password",className:"form-password-label",children:"Password:"}),Object(a.jsx)("input",{className:"form-password-input",type:"password",name:"password",onChange:p,placeholder:"Password",autoComplete:"off"}),l?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{color:"red"},children:"An error happened during the signup process!"})}):null,Object(a.jsx)("div",{className:"form-button-container",children:Object(a.jsx)("button",{type:"submit",disabled:!1,className:"form-btn",children:"Sign Up"})})]})})})},te=new d.a({request:function(e){var t=j.getToken();e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"}),ne=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.ApolloProvider,{client:te,children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(g,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:J}),Object(a.jsx)(l.a,{exact:!0,path:"/login",component:Z}),Object(a.jsx)(l.a,{exact:!0,path:"/signup",component:ee})]})]})})})},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=n(46),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},ie=n(9),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alpha:1,presetName:void 0,animationDurationState:"4s",animationDelayState:".5s",isInverted:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER_SPLASH_CONFIG":var n={alpha:t.payload.alpha,presetName:t.payload.presetName,animationDurationState:t.payload.animationDuration,animationDelayState:t.payload.animationDelay};return Object(ie.a)(Object(ie.a)({},e),{},{newState:n});case"INVERT_SWITCH":return Object(ie.a)(Object(ie.a)({},e),{},{isInverted:!t.payload});case"PRESET_SWITCH":return Object(ie.a)(Object(ie.a)({},e),{},{presetName:t.payload});case"ANIMATION_DELAY_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{animationDelayState:t.payload});case"ANIMATION_DURATION_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{animationDurationState:t.payload});case"STOP_ANIMATING":return Object(ie.a)(Object(ie.a)({},e),{},{isAnimating:t.payload});case"ALPHA_FADER_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{alpha:t.payload});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SKETCH_ONE_ON":return Object(ie.a)(Object(ie.a)({},e),{},{isOn:t.payload});default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SKETCH_TWO_ON":return Object(ie.a)(Object(ie.a)({},e),{},{isOn:t.payload});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:"",emailIsComplete:!1,password:"",passwordIsComplete:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_EMAIL_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{email:t.payload});case"LOGIN_EMAIL_COMPLETED":return Object(ie.a)(Object(ie.a)({},e),{},{emailIsComplete:t.payload});case"LOGIN_PASSWORD_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{password:t.payload});case"LOGIN_PASSWORD_COMPLETED":return Object(ie.a)(Object(ie.a)({},e),{},{passwordIsComplete:t.payload});default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",usernameIsComplete:!1,email:"",emailIsComplete:!1,password:"",passwordIsComplete:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USERNAME_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{username:t.payload});case"SIGNUP_USERNAME_COMPLETED":return Object(ie.a)(Object(ie.a)({},e),{},{usernameIsComplete:t.payload});case"SIGNUP_EMAIL_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{email:t.payload});case"SIGNUP_EMAIL_COMPLETED":return Object(ie.a)(Object(ie.a)({},e),{},{emailIsComplete:t.payload});case"SIGNUP_PASSWORD_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{password:t.payload});case"SIGNUP_PASSWORD_COMPLETED":return Object(ie.a)(Object(ie.a)({},e),{},{passwordIsComplete:t.payload});default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOnState:!1,gifs:[],scrollInterval:1e3,searchTerms:[],searchIsValid:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VERIFY_IS_ON":return Object(ie.a)(Object(ie.a)({},e),{},{isOn:t.payload});case"GET_GIFS":return Object(ie.a)(Object(ie.a)({},e),{},{gifs:t.payload});case"SCROLL_INTERVAL_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{scrollInterval:t.payload});case"SEARCH_TERM_CHANGE":return Object(ie.a)(Object(ie.a)({},e),{},{searchTerms:t.payload});case"SEARCH_VALIDATE":return Object(ie.a)(Object(ie.a)({},e),{},{searchIsValid:t.payload});default:return e}},me=Object(oe.b)({isLoggedIn:ce,ledChange:se,sketchOne:le,sketchTwo:ue,loginForm:de,signupForm:pe,artScroller:be}),je=Object(oe.c)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(X.a,{store:je,children:Object(a.jsx)(ne,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(t,e)}))}}()},73:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.dae336be.chunk.js.map