(function(e){function t(t){for(var n,a,s=t[0],l=t[1],u=t[2],g=0,p=[];g<s.length;g++)a=s[g],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/MagicLink/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},1603:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=(o("034f"),o("2877")),s={},l=Object(a["a"])(s,r,i,!1,null,null,null),u=l.exports,c=o("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("home_main",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=o("9248"),f=o("ed36"),m=o("5d75"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("You're logged in")]),o("h1",[e._v(e._s(e.email)+" ")]),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Logout"},on:{click:e.logOut}})])},y=[],v={data:function(){return{email:n["a"].prototype.$user}},methods:{logOut:function(){localStorage.removeItem("jwt"),ve.push({path:"/login"})}}},L=v,w=Object(a["a"])(L,h,y,!1,null,null,null),b=w.exports,_={name:"Home",components:{home_main:b},created:function(){this.isLoggedIn()},methods:{isLoggedIn:function(){var e=localStorage.getItem("jwt"),t=new m["jwt"];t.setJwt(e),d["grpc"].unary(f["Login"].isLoggedIn,{request:t,host:this.$hostname,onEnd:function(e){var t=e.status,o=e.statusMessage,n=e.headers,r=e.message,i=e.trailers;t===d["grpc"].Code.OK&&r?console.log(""):(console.log("status:",t,o,n,r,i),ve.push({path:"/login"}))}})}}},j=_,E=(o("5d9f"),Object(a["a"])(j,g,p,!1,null,"d0941a66",null)),O=E.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"containerInner"},[e.currentState==e.State.Idle?o("login_enter",{on:{email:e.login}}):e._e(),e.currentState==e.State.Waiting?o("login_waiting",{attrs:{email:e.email}}):e._e(),e.currentState==e.State.Idle?o("p",[e._v(e._s(e.responce))]):e._e()],1)])},I=[],S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Sign up / Log in")]),o("form",{on:{submit:function(t){return e.$emit("email",e.email)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Hello@world.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("div",{attrs:{id:"space"}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Sign up / Log in"}})])])},M=[],F=n["a"].extend({name:"login_enter",data(){return{email:""}}}),k=F,z=(o("b5c8"),Object(a["a"])(k,S,M,!1,null,"05316bcc",null)),x=z.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Don't close this tab!")]),o("h2",[e._v("Confirm your email!")]),o("p",[e._v("We emailed a magic link to ")]),o("p",{staticClass:"thick"},[e._v(e._s(e.email))])])},W=[],C={name:"waiting",props:["email"]},$=C,R=(o("af83"),Object(a["a"])($,T,W,!1,null,"ee817b1e",null)),D=R.exports,N={Idle:1,Waiting:2},P={name:"login",components:{login_enter:x,login_waiting:D},created:function(){this.isLoggedIn()},data:function(){return{currentState:N.Idle,State:N,responce:"",email:""}},methods:{login:function(e){var t=this;this.email=e;var o=new m["loginInfo"];o.setEmail(e),o.setKey(1),this.currentState=N.Waiting,d["grpc"].unary(f["Login"].login,{request:o,host:this.$hostname,onEnd:function(e){var o=e.status,r=e.statusMessage,i=e.headers,a=e.message,s=e.trailers;o===d["grpc"].Code.OK&&a?(localStorage.setItem("jwt",a.toObject().jwt),n["a"].prototype.$user=t.email,ve.push({path:"/"})):(console.log("status:",o,r,i,a,s),t.responce="You're link is expired try again",t.currentState=N.Idle)}})},isLoggedIn:function(){var e=localStorage.getItem("jwt"),t=new m["jwt"];t.setJwt(e),d["grpc"].unary(f["Login"].isLoggedIn,{request:t,host:this.$hostname,onEnd:function(e){var t=e.status,o=e.statusMessage,n=e.headers,r=e.message,i=e.trailers;t===d["grpc"].Code.OK&&r?ve.push({path:"/"}):console.log("status:",t,o,n,r,i)}})}}},G=P,q=Object(a["a"])(G,B,I,!1,null,null,null),J=q.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:o("a762"),alt:""}}),n("div",{staticClass:"container"},[n("div",{staticClass:"containerInner"},[e.currentState==e.State.Waiting?n("waiting"):e.currentState==e.State.Error?n("error"):e.currentState==e.State.Succes?n("success"):e._e()],1)])])},H=[],A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{height:"69",width:"69",src:"https://www.42.fr/wp-content/themes/42/images/42_logo_black.svg",alt:""}}),o("h1",[e._v("You're logged in")]),o("p",[e._v(" Go back to your original tab ")]),o("p",[e._v(" You can close this window ")])])}],U={name:"success"},V=U,Q=Object(a["a"])(V,A,Y,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{src:"http://placekitten.com/200/300"}}),o("h1",[e._v("Logging you in...")])])}],te={name:"waiting"},oe=te,ne=Object(a["a"])(oe,Z,ee,!1,null,null,null),re=ne.exports,ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{height:"69",width:"69",src:"https://www.42.fr/wp-content/themes/42/images/42_logo_black.svg",alt:""}}),o("h1",[e._v("Magic link expired")]),o("p",[e._v("Go back to your original tab and request a new Link")]),o("p",[e._v("You can close this window")])])}],se={name:"error"},le=se,ue=Object(a["a"])(le,ie,ae,!1,null,null,null),ce=ue.exports;const ge={Waiting:1,Succes:2,Error:3};var pe=n["a"].extend({components:{success:X,waiting:re,error:ce},data:function(){return{currentState:ge.Waiting,State:ge}},created:function(){let e=this.$route.query;if(void 0===e.code)return void(this.currentState=ge.Error);const t=new m["code"];t.setCode(e.code),d["grpc"].unary(f["Login"].confirmLogin,{request:t,host:this.$hostname,onEnd:e=>{const{status:t,statusMessage:o,headers:n,message:r,trailers:i}=e;t===d["grpc"].Code.OK&&r?this.currentState=ge.Succes:(console.log("status:",t,o,n,r,i),this.currentState=ge.Error)}})}}),de=pe,fe=(o("612a"),Object(a["a"])(de,K,H,!1,null,"1ea6aed5",null)),me=fe.exports;n["a"].use(c["a"]);var he=[{path:"/",name:"Home",component:O},{path:"/login",name:"login",component:J},{path:"/confirmation",name:"confirmation",component:me}],ye=new c["a"]({routes:he}),ve=ye;n["a"].config.productionTip=!1,n["a"].prototype.$hostname="http://173.255.248.250:8080",new n["a"]({router:ve,render:function(e){return e(u)}}).$mount("#app")},"5d75":function(e,t,o){var n=o("8513"),r=n,i=Function("return this")();r.exportSymbol("proto.Login.code",null,i),r.exportSymbol("proto.Login.empty",null,i),r.exportSymbol("proto.Login.jwt",null,i),r.exportSymbol("proto.Login.loginInfo",null,i),r.exportSymbol("proto.Login.status",null,i),proto.Login.loginInfo=function(e){n.Message.initialize(this,e,0,-1,null,null)},r.inherits(proto.Login.loginInfo,n.Message),r.DEBUG&&!COMPILED&&(proto.Login.loginInfo.displayName="proto.Login.loginInfo"),proto.Login.jwt=function(e){n.Message.initialize(this,e,0,-1,null,null)},r.inherits(proto.Login.jwt,n.Message),r.DEBUG&&!COMPILED&&(proto.Login.jwt.displayName="proto.Login.jwt"),proto.Login.code=function(e){n.Message.initialize(this,e,0,-1,null,null)},r.inherits(proto.Login.code,n.Message),r.DEBUG&&!COMPILED&&(proto.Login.code.displayName="proto.Login.code"),proto.Login.empty=function(e){n.Message.initialize(this,e,0,-1,null,null)},r.inherits(proto.Login.empty,n.Message),r.DEBUG&&!COMPILED&&(proto.Login.empty.displayName="proto.Login.empty"),proto.Login.status=function(e){n.Message.initialize(this,e,0,-1,null,null)},r.inherits(proto.Login.status,n.Message),r.DEBUG&&!COMPILED&&(proto.Login.status.displayName="proto.Login.status"),n.Message.GENERATE_TO_OBJECT&&(proto.Login.loginInfo.prototype.toObject=function(e){return proto.Login.loginInfo.toObject(e,this)},proto.Login.loginInfo.toObject=function(e,t){var o={email:n.Message.getFieldWithDefault(t,1,""),key:n.Message.getFieldWithDefault(t,2,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.Login.loginInfo.deserializeBinary=function(e){var t=new n.BinaryReader(e),o=new proto.Login.loginInfo;return proto.Login.loginInfo.deserializeBinaryFromReader(o,t)},proto.Login.loginInfo.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var o=t.getFieldNumber();switch(o){case 1:var n=t.readString();e.setEmail(n);break;case 2:n=t.readInt64();e.setKey(n);break;default:t.skipField();break}}return e},proto.Login.loginInfo.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.Login.loginInfo.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.Login.loginInfo.serializeBinaryToWriter=function(e,t){var o=void 0;o=e.getEmail(),o.length>0&&t.writeString(1,o),o=e.getKey(),0!==o&&t.writeInt64(2,o)},proto.Login.loginInfo.prototype.getEmail=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.Login.loginInfo.prototype.setEmail=function(e){return n.Message.setProto3StringField(this,1,e)},proto.Login.loginInfo.prototype.getKey=function(){return n.Message.getFieldWithDefault(this,2,0)},proto.Login.loginInfo.prototype.setKey=function(e){return n.Message.setProto3IntField(this,2,e)},n.Message.GENERATE_TO_OBJECT&&(proto.Login.jwt.prototype.toObject=function(e){return proto.Login.jwt.toObject(e,this)},proto.Login.jwt.toObject=function(e,t){var o={jwt:n.Message.getFieldWithDefault(t,1,"")};return e&&(o.$jspbMessageInstance=t),o}),proto.Login.jwt.deserializeBinary=function(e){var t=new n.BinaryReader(e),o=new proto.Login.jwt;return proto.Login.jwt.deserializeBinaryFromReader(o,t)},proto.Login.jwt.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var o=t.getFieldNumber();switch(o){case 1:var n=t.readString();e.setJwt(n);break;default:t.skipField();break}}return e},proto.Login.jwt.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.Login.jwt.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.Login.jwt.serializeBinaryToWriter=function(e,t){var o=void 0;o=e.getJwt(),o.length>0&&t.writeString(1,o)},proto.Login.jwt.prototype.getJwt=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.Login.jwt.prototype.setJwt=function(e){return n.Message.setProto3StringField(this,1,e)},n.Message.GENERATE_TO_OBJECT&&(proto.Login.code.prototype.toObject=function(e){return proto.Login.code.toObject(e,this)},proto.Login.code.toObject=function(e,t){var o={code:n.Message.getFieldWithDefault(t,1,"")};return e&&(o.$jspbMessageInstance=t),o}),proto.Login.code.deserializeBinary=function(e){var t=new n.BinaryReader(e),o=new proto.Login.code;return proto.Login.code.deserializeBinaryFromReader(o,t)},proto.Login.code.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var o=t.getFieldNumber();switch(o){case 1:var n=t.readString();e.setCode(n);break;default:t.skipField();break}}return e},proto.Login.code.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.Login.code.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.Login.code.serializeBinaryToWriter=function(e,t){var o=void 0;o=e.getCode(),o.length>0&&t.writeString(1,o)},proto.Login.code.prototype.getCode=function(){return n.Message.getFieldWithDefault(this,1,"")},proto.Login.code.prototype.setCode=function(e){return n.Message.setProto3StringField(this,1,e)},n.Message.GENERATE_TO_OBJECT&&(proto.Login.empty.prototype.toObject=function(e){return proto.Login.empty.toObject(e,this)},proto.Login.empty.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.Login.empty.deserializeBinary=function(e){var t=new n.BinaryReader(e),o=new proto.Login.empty;return proto.Login.empty.deserializeBinaryFromReader(o,t)},proto.Login.empty.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var o=t.getFieldNumber();switch(o){default:t.skipField();break}}return e},proto.Login.empty.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.Login.empty.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.Login.empty.serializeBinaryToWriter=function(e,t){},n.Message.GENERATE_TO_OBJECT&&(proto.Login.status.prototype.toObject=function(e){return proto.Login.status.toObject(e,this)},proto.Login.status.toObject=function(e,t){var o={isloggedin:n.Message.getBooleanFieldWithDefault(t,1,!1)};return e&&(o.$jspbMessageInstance=t),o}),proto.Login.status.deserializeBinary=function(e){var t=new n.BinaryReader(e),o=new proto.Login.status;return proto.Login.status.deserializeBinaryFromReader(o,t)},proto.Login.status.deserializeBinaryFromReader=function(e,t){while(t.nextField()){if(t.isEndGroup())break;var o=t.getFieldNumber();switch(o){case 1:var n=t.readBool();e.setIsloggedin(n);break;default:t.skipField();break}}return e},proto.Login.status.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return proto.Login.status.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.Login.status.serializeBinaryToWriter=function(e,t){var o=void 0;o=e.getIsloggedin(),o&&t.writeBool(1,o)},proto.Login.status.prototype.getIsloggedin=function(){return n.Message.getBooleanFieldWithDefault(this,1,!1)},proto.Login.status.prototype.setIsloggedin=function(e){return n.Message.setProto3BooleanField(this,1,e)},r.object.extend(t,proto.Login)},"5d9f":function(e,t,o){"use strict";var n=o("761f"),r=o.n(n);r.a},"612a":function(e,t,o){"use strict";var n=o("e326"),r=o.n(n);r.a},"761f":function(e,t,o){},"85ec":function(e,t,o){},a762:function(e,t,o){e.exports=o.p+"img/background.adbb7f69.svg"},af83:function(e,t,o){"use strict";var n=o("afe9"),r=o.n(n);r.a},afe9:function(e,t,o){},b5c8:function(e,t,o){"use strict";var n=o("1603"),r=o.n(n);r.a},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},e326:function(e,t,o){},ed36:function(e,t,o){var n=o("5d75"),r=o("9248").grpc,i=function(){function e(){}return e.serviceName="Login.Login",e}();function a(e,t){this.serviceHost=e,this.options=t||{}}i.login={methodName:"login",service:i,requestStream:!1,responseStream:!1,requestType:n.loginInfo,responseType:n.jwt},i.confirmLogin={methodName:"confirmLogin",service:i,requestStream:!1,responseStream:!1,requestType:n.code,responseType:n.empty},i.isLoggedIn={methodName:"isLoggedIn",service:i,requestStream:!1,responseStream:!1,requestType:n.jwt,responseType:n.status},t.Login=i,a.prototype.login=function(e,t,o){2===arguments.length&&(o=arguments[1]);var n=r.unary(i.login,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==r.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,n.close()}}},a.prototype.confirmLogin=function(e,t,o){2===arguments.length&&(o=arguments[1]);var n=r.unary(i.confirmLogin,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==r.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,n.close()}}},a.prototype.isLoggedIn=function(e,t,o){2===arguments.length&&(o=arguments[1]);var n=r.unary(i.isLoggedIn,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==r.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,n.close()}}},t.LoginClient=a}});
//# sourceMappingURL=app.0cd45442.js.map