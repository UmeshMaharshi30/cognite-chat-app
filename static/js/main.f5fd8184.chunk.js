(this["webpackJsonpreact-redux-template"]=this["webpackJsonpreact-redux-template"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),s=(n(25),n(26),n(27),n(1)),o=n(2),l=n(4),u=n(3),d=n(5),p={SEND_MESSAGE:"SEND_MESSAGE_REQUEST",OPEN_CHAT:"OPEN_CHAT_MESSAGE_REQUEST"},m={dave:{name:"Dave",id:"dave",email:"dave@react.com",friends:["john","mark","katie","jessica"]},john:{name:"John",id:"john",email:"john@react.com",friends:["mark","dave","jessica"]},mark:{name:"Mark",id:"mark",email:"mark@react.com",friends:["john","katie","jessica"]},jessica:{name:"Jessica",id:"jessica",email:"jessica@react.com"},katie:{name:"Katie",id:"katie",email:"katie@react.com"}},h=n(6),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=m[this.props.id],n=t.name,a=t.id;return r.a.createElement("li",{className:a==this.props.user_reducer.friend_id?"list-group-item btn active":"list-group-item btn",onClick:function(){return e.props.tileClick(a)}},n)}}]),t}(a.Component),v=Object(h.b)((function(e){return e}))(f),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=m.dave.friends,t=this.props.tileClick;return r.a.createElement("ul",{className:"list-group"},e.map((function(e,n){return r.a.createElement(v,{key:n,id:e,tileClick:t})})))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.message,t=this.props.friend_id;this.props.base_user_id;return r.a.createElement("div",{className:e.id!=t?"p-1 col-10":"p-1 col-12"},r.a.createElement("div",{className:e.id!=t?"text-left":"text-right"},r.a.createElement("span",{className:e.id!=t?"bg-primary rounded p-1":"bg-secondary rounded p-1"},e.message)))}}]),t}(a.Component),O={sendMessage:function(e,t,n){return{type:p.SEND_MESSAGE,payload:{sender_id:e,receiver_id:t,message:n}}},openChat:function(e){return{type:p.OPEN_CHAT,payload:{friend_id:e}}}};var j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:""},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.sendMessage,t=this.props.base_user_id,n=this.props.receiver_id,a=this.state.value,i=this;return r.a.createElement("div",{className:"input-group m-1",style:{height:"40px"}},r.a.createElement("textarea",{value:this.state.value,onChange:function(e){i.setState({value:e.target.value})},className:"form-control"}),r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return function(){var r=a.trim();r&&(e(t,n,r),i.setState({value:""}))}()}},"Send"))}}]),t}(a.Component),E=Object(h.b)((function(e){return{base_user_id:e.user_reducer.base_user,receiver_id:e.user_reducer.friend_id}}),(function(e){return{sendMessage:function(t,n,a){e(O.sendMessage(t,n,a))}}}))(j),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.friend_id,t=this.props.base_user,n=this.props.chat_history;if(!e)return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome !"));if(!n||!n[e])return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome !"),"Start a Conversation with ",m[e].name,r.a.createElement(E,null));var a=n[e].messages;return r.a.createElement("div",{style:{height:"600px"},className:"text-white"},r.a.createElement("div",{style:{height:"450px",overflowY:"scroll",wordWrap:"break-word",display:"block"},className:"row"},a.map((function(n,a){return r.a.createElement(g,{key:a,message:n,base_user_id:t,friend_id:e})}))),r.a.createElement(E,null))}}]),t}(a.Component),_=Object(h.b)((function(e){return e.user_reducer}))(y),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user_reducer,t=e.base_user,n=(e.friend_id,this.props.onFriendTileClick);this.props.chat_history,this.props.sendMessage;return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Cognite"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:""},m[t].name)))),r.a.createElement("div",{className:"row d-flex m-1"},r.a.createElement("div",{className:"col-4"},r.a.createElement(b,{tileClick:n})),r.a.createElement("div",{className:"col-8"},r.a.createElement(_,null))))}}]),t}(a.Component),w=Object(h.b)((function(e){return e}),(function(e){return{onFriendTileClick:function(t){e(O.openChat(t))},sendMessage:function(t,n,a){e(O.sendMessage(t,n,a))}}}))(k);var N=function(){return r.a.createElement(w,null)},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=n(8),P=n(17),M=n(18),x=n(19);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.OPEN_CHAT:return W({},e,{friend_id:t.payload.friend_id});case p.SEND_MESSAGE:var n=t.payload.receiver_id,a=t.payload.sender_id,r=t.payload.message,i=W({},e.chat_history);if(!n||!a)return e;var c={id:a,message:r},s=[];if(e.chat_history[n])(s=e.chat_history[n].messages.slice(0)).push(c),i[n].messages=s;else{var o={id:n};o.messages=[c],i[n]=o}var l=W({},e,{chat_history:i});return localStorage.setItem(a,JSON.stringify(l)),l;default:if(JSON.parse(localStorage.getItem("dave")))return JSON.parse(localStorage.getItem("dave"));var u={base_user:"dave",chat_history:{}};return u}},J=Object(A.c)({user_reducer:D}),G=Object(M.createLogger)(),R=Object(A.d)(J,Object(A.a)(P.a,G));c.a.render(r.a.createElement(h.a,{store:R}," ",r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cognite-chat-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cognite-chat-app","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.f5fd8184.chunk.js.map