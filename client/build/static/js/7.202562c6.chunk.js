(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[7],{231:function(e,t,a){"use strict";a(0);var n=a(172),o=a(2);const c=Object(n.a)((e=>({empty:{padding:"10px 10px 40px 10px",marginLeft:"30%",marginRight:"30%",color:"#848884"}})));t.a=()=>{const e=c();return Object(o.jsx)("div",{className:e.empty,children:"Nothing here yet!"})}},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));a(0);var n=a(172),o=a(113),c=a(114),s=a(49),i=a(71),l=a(233),r=a.n(l),d=a(119),p=a(12),m=a(2);const j=Object(n.a)((e=>({root:{flexGrow:1,marginTop:"-50px"},arrowBtn:{marginRight:"10px"},title:{color:"#F5F5DC\t",fontSize:"16px"}})));function g(e){const t=j(),a=localStorage.getItem("token");return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(o.a,{position:"static",children:Object(m.jsxs)(c.a,{children:[Object(m.jsx)(i.a,{edge:"start",className:t.arrowBtn,color:"inherit","aria-label":"menu",children:Object(m.jsx)(r.a,{onClick:()=>e.history.goBack()})}),e.dp?Object(m.jsx)(i.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(m.jsx)(d.a,{src:p.a+"/uploads/".concat(e.dp,"/").concat(a),style:{backgroundColor:"lightgrey",width:"40px",height:"40px"}})}):null,Object(m.jsx)(s.a,{variant:"h6",className:t.title,children:e.name})]})})})}},233:function(e,t,a){"use strict";var n=a(29),o=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(0)),s=(0,n(a(31)).default)(c.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s},249:function(e,t,a){"use strict";var n=a(29),o=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(0)),s=(0,n(a(31)).default)(c.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=s},294:function(e,t,a){},295:function(e,t,a){"use strict";var n=a(29),o=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(0)),s=(0,n(a(31)).default)(c.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.default=s},331:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(9),c=a(224),s=a(177),i=a(180),l=a(70),r=a(172),d=a(74),p=a.n(d),m=a(179),j=a(295),g=a.n(j),h=a(249),u=a.n(h),b=a(110),y=a(14),x=a.n(y),O=a(12),w=(a(294),a(232)),f=a(245),v=a.n(f);const k=new TextDecoder,B=new TextEncoder;var C=(e,t,a)=>{var n;console.log(e),n=e,e=Uint8Array.from(atob(n),(e=>e.charCodeAt(0))),console.log(e);return console.log(a),console.log(t),(async()=>{const n=await async function(e,t,a,n,o){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"AES-CBC";const s=await window.crypto.subtle.importKey("raw",B.encode(e),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:B.encode(t),iterations:a,hash:o},s,{name:c,length:n},!1,["encrypt","decrypt"])}("my password",t,1e5,256,"SHA-256"),o=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:a},n,e.slice(32));return console.log(o),k.decode(o)})()};const E=new TextEncoder;let S;var I=(e,t,a)=>(console.log("salt "+t+" iv "+a),console.log(e),e=E.encode(e),console.log(e),(async()=>{const n=await async function(e,t,a,n,o){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"AES-CBC";return S=await window.crypto.subtle.importKey("raw",E.encode(e),{name:"PBKDF2"},!1,["deriveKey"]),await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:E.encode(t),iterations:a,hash:o},S,{name:c,length:n},!1,["encrypt","decrypt"])}("my password",t,1e5,256,"SHA-256");let o=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:a},n,e);console.log("Encrypted ".concat(o));const c=(s=[...t,...a,...new Uint8Array(o)],btoa(String.fromCharCode(...new Uint8Array(s))));var s;return console.log("concatennated ".concat(c)),c})()),A=a(42),R=(a(123),a(231)),T=a(2);A.a.configure();const _=Object(r.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},heading:{textAlign:"justifyContent"},footer:{float:"right"},paging:{margin:"auto",backgroundColor:"beige",color:"#005",padding:"3px",width:"140px",marginBottom:"20px",fontSize:"13px",textAlign:"center",cursor:"pointer"},messageBox:{width:"100%",flexWrap:"wrap",borderRadius:"10px",bottom:0},main:{border:"1px solid black",paddingTop:"70px",marginLeft:"100px",width:"100%"},container:{margin:"auto",minHeight:"70vh",padding:"3px 4px",borderRadius:"10px",background:"linear-gradient(to right, #d62976, #fa7e1e)",display:"flex",flexFlow:"row wrap",alignItems:"center",justifyContent:"center"},msgs:{width:"250px",maxWidth:"80%",marginBottom:"10px",paddingBottom:"12px"},sendbox:{width:"100%"},download:{marginRight:"-15px",color:"white"},section:{background:"linear-gradient(to right, #4682B4, #87CEEB)"},empty:{position:"fixed",width:"100%",left:"22%",top:"42vh",zIndex:"1"}}),F={marginLeft:"auto",backgroundColor:"#fffcb7",color:"black"};t.default=e=>{var t;const a=_(),r=Object(c.a)("(min-width:600px)"),d=Object(o.c)((e=>e.chatReducer)),j=Object(o.b)();let h,{room:y,emails:f}=e.match.params;const{roomName:k,dp:B}=e;let E;h=y!==k?"/personal/".concat(y,"/").concat(f):"/chat/".concat(y),E=y===k?new Audio("../incoming.mp3"):new Audio("../../incoming.mp3");const[S,N]=Object(n.useState)(!1),U=()=>{document.getElementById("file-input").value="",K(""),M(""),V(""),N(!1)},[L,D]=Object(n.useState)(""),[H,K]=Object(n.useState)(""),[z,M]=Object(n.useState)(""),[P,V]=Object(n.useState)(""),[W,J]=Object(n.useState)(2),[q,G]=Object(n.useState)("block"),Q=Object(n.useRef)(null),X=v()(O.a,{transports:["websocket","polling"]}),Y=localStorage.getItem("token"),Z=x.a.create({baseURL:O.a,headers:{Authorization:"bearer ".concat(Y)}}),$=Object(o.c)((e=>e.userReducer.email)),ee=Object(o.c)((e=>e.userReducer.name)),te=(e,t,a)=>{e.emit("create",y),e.emit("user-joined",t,y),e.on("receiveimg",(e=>{a===e.email&&(document.getElementById("loader").style.display="none"((async()=>{j({type:"add_chat",payload:{room:y,msg:e}}),setTimeout((()=>window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})),500),Q.current.focus()}))())})),e.on("receive",(e=>{console.log("receive data",e),a!==e.email&&(j({type:"add_recent",payload:{room:y,roomName:k,link:h,dp:B}}),(async()=>{e.path||(e.salt=e.salt.split(","),e.iv=e.iv.split(","),e.salt=new Uint8Array(e.salt),e.iv=new Uint8Array(e.iv),await C(e.message,e.salt,e.iv).then((t=>{e.message=t}))),(async t=>{j({type:"add_chat",payload:{room:y,msg:e}}),e.path?setTimeout((()=>window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})),500):window.scrollTo({top:null===(t=document.getElementById("messages"))||void 0===t?void 0:t.scrollHeight,behaviour:"smooth"}),Q.current.focus()})(),E.play()})())}))};async function ae(e){await Z.post("getMessages",{room:y,page:e}).then((t=>{const a=t.data;if(1==a.status){async function n(){1===e&&await Z.get("getUser").then((e=>{const t=e.data;j({type:"load_user",payload:t}),te(X,t.name,t.email)})).catch((e=>A.a.error(e))),await async function(){const e=a.msgs;for(let t=0;t<e.length;t++){const a=e[t];a.path||(a.salt=a.salt.split(","),a.iv=a.iv.split(","),a.salt=a.salt.map((e=>parseInt(e))),a.iv=a.iv.map((e=>parseInt(e))),a.salt=new Uint8Array(a.salt),a.iv=new Uint8Array(a.iv),await C(a.message,a.salt,a.iv).then((e=>{a.message=e})))}j({type:"load_chat",payload:{room:y,msgs:e}})}(),1===e&&setTimeout((()=>window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})),350),J((e=>e+1))}a.end?G("none"):G("block"),n()}})).catch((e=>{}))}Object(n.useEffect)((()=>(d[y]?te(X,ee,$):ae(1),()=>{document.querySelector("body").style.backgroundColor="",X.disconnect(),j({type:"delete_chat",payload:y})})),[]);const ne=()=>{let e=(new Date).getHours(),t=(new Date).getMinutes();return e=0===parseInt(e/10)?"0"+e:e,t=0===parseInt(t/10)?"0"+t:t,e+":"+t},oe=(e,t,a)=>{if(""===a)return;const n=ne();let o=a;document.getElementById("loader").style.display="block",console.log("window.crypto.getRandomValues",window.crypto.getRandomValues);let c=window.crypto.getRandomValues(new Uint8Array(16)),s=window.crypto.getRandomValues(new Uint8Array(16));(async()=>{j({type:"add_chat",payload:{room:t,msg:{flag:0,email:$,room:t,name:e,message:a,time:n}}}),j({type:"add_recent",payload:{room:t,roomName:k,link:h,dp:B}}),window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"}),Q.current.focus()})(),I(o,c,s).then((a=>{console.log(a),c=[...c],s=[...s],c=c.join(","),s=s.join(","),X.emit("send",{flag:0,email:$,room:t,name:e,msg:a,path:null,salt:c,iv:s,time:n,roomName:k,link:h,dp:B}),document.getElementById("loader").style.display="none",D("")}))};const ce=e=>{const t=document.createElement("a");t.href=e,t.click()};return Object(T.jsxs)("div",{class:a.section,children:[Object(T.jsx)("center",{children:Object(T.jsxs)(b.a,{open:S,onClose:U,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(T.jsxs)("center",{children:[Object(T.jsx)("img",{src:z,style:{display:z?"block":"none"},width:"100%",height:"100%",alt:""}),Object(T.jsxs)("video",{style:{display:P?"block":"none"},width:"100%",height:"100%",controls:!0,children:[Object(T.jsx)("source",{src:P,type:"video/mp4"}),Object(T.jsx)("source",{src:P,type:"video/ogg"})]}),Object(T.jsx)("div",{style:{display:""!=H?"block":"none",padding:"50px"},children:H})]}),Object(T.jsx)(s.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:async function(){const e=document.getElementById("file-input").files[0];if(!document.getElementById("file-input").value)return;document.getElementById("file-input").value="",document.getElementById("loader").style.display="block",U();const t=ne();let a=4;e.type.includes("image")?a=1:e.type.includes("video")?a=2:e.type.includes("audio")&&(a=3);let n=new FormData;n.append("file",e),Z.post("sendFile",n).then((n=>{1===n.data.status?(e&&(e.value=""),document.getElementById("loader").style.display="none",j({type:"add_chat",payload:{room:y,msg:{flag:a,email:$,room:y,name:ee,msg:null,path:e.name,time:t,roomName:k,link:h}}}),j({type:"add_recent",payload:{room:y,roomName:k,link:h,dp:B}}),X.emit("send",{flag:a,email:$,room:y,name:ee,msg:null,path:e.name,time:t,roomName:k,link:h,dp:B})):A.a.error("Something went wrong",{autoClose:1e3})})).catch((e=>A.a.error("Something went wrong",{autoClose:1e3})))}.bind(void 0),children:"Send"})]})}),Object(T.jsxs)("div",{style:{position:"fixed",width:"90%",zIndex:10,marginLeft:"240px",marginTop:"45px"},children:[Object(T.jsx)(w.a,{name:k,dp:B,...e}),Object(T.jsx)("center",{children:Object(T.jsx)(m.a,{id:"loader",style:{marginTop:"100px",display:"none"}})})]}),Object(T.jsxs)("div",{class:a.main,children:[Object(T.jsx)("div",{class:a.container,id:"container",style:{width:r?"50%":"100%"},children:Object(T.jsxs)("div",{id:"messages",class:a.messageBox,children:[!!d[y]&&Object(T.jsx)(l.a,{elevation:3,className:a.paging,style:{display:q},onClick:ae.bind(void 0,W),children:"See Older Messages"}),null!==(t=d[y])&&void 0!==t&&t.length?d[y].map((e=>{let t=$===e.email?F:{};return Object(T.jsx)(l.a,{elevation:3,className:a.msgs,style:{...t},children:0===e.flag?Object(T.jsxs)("div",{style:{padding:"10px"},children:[y===k?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("b",{children:e.name}),Object(T.jsx)("br",{})]}):null,Object(T.jsx)("span",{children:e.message}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{float:"right"},children:e.time})]}):1===e.flag?Object(T.jsxs)("div",{style:{padding:"10px"},children:[y===k?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("b",{children:e.name}),Object(T.jsx)("br",{})]}):null,Object(T.jsx)("span",{children:Object(T.jsx)("img",{src:"".concat(O.a,"/uploads/").concat(e.path,"/").concat(Y),height:"100%",width:"100%",alt:""})}),Object(T.jsxs)("span",{children:[e.path," ",Object(T.jsx)(g.a,{color:"primary",style:{float:"right"},onClick:ce.bind(void 0,O.a+"/uploads/".concat(e.path,"/").concat(Y))})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{float:"right",paddingBottom:"50px"},children:e.time})]}):2===e.flag?Object(T.jsxs)("div",{style:{padding:"10px"},children:[y===k?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("b",{children:e.name}),Object(T.jsx)("br",{})]}):null,Object(T.jsxs)("video",{width:"100%",height:"100%",controls:!0,children:[Object(T.jsx)("source",{src:O.a+"/uploads/".concat(e.path,"/").concat(Y),type:"video/mp4"}),Object(T.jsx)("source",{src:O.a+"/uploads/".concat(e.path,"/").concat(Y),type:"video/wav"}),Object(T.jsx)("source",{src:O.a+"/uploads/".concat(e.path,"/").concat(Y),type:"video/ogg"})]}),Object(T.jsxs)("span",{children:[e.path," ",Object(T.jsx)(g.a,{color:"primary",style:{float:"right"},onClick:ce.bind(void 0,O.a+"/uploads/".concat(e.path,"/").concat(Y))})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{float:"right"},children:e.time})]}):3===e.flag?Object(T.jsxs)("div",{style:{padding:"10px"},children:[y===k?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("b",{children:e.name}),Object(T.jsx)("br",{})]}):null,Object(T.jsxs)("audio",{controls:!0,children:[Object(T.jsx)("source",{src:O.a+"/uploads/".concat(e.path,"/").concat(Y),type:"audio/ogg"}),Object(T.jsx)("source",{src:O.a+"/uploads/".concat(e.path,"/").concat(Y),type:"audio/mpeg"})]}),Object(T.jsxs)("span",{children:[e.path," ",Object(T.jsx)(g.a,{color:"primary",style:{float:"right"},onClick:ce.bind(void 0,O.a+"/uploads/".concat(e.path,"/").concat(Y))})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{float:"right"},children:e.time})]}):Object(T.jsxs)("div",{style:{padding:"10px"},children:[y===k?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("b",{children:e.name}),Object(T.jsx)("br",{})]}):null,Object(T.jsxs)("span",{children:[" ",e.path," ",Object(T.jsx)(g.a,{color:"primary",style:{float:"right"},onClick:ce.bind(void 0,O.a+"/uploads/".concat(e.path,"/").concat(Y))})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{float:"right"},children:e.time})]})})})):Object(T.jsx)("div",{className:a.empty,children:Object(T.jsx)(R.a,{})})]})}),Object(T.jsx)("div",{children:Object(T.jsx)("center",{children:Object(T.jsxs)("div",{class:a.sendbox,style:{marginBottom:"40px"},children:[Object(T.jsx)(i.a,{type:"text",ref:Q,style:{width:"45%"},placeholder:"Type your message here",value:L,onKeyDown:e=>{"Enter"===e.key&&oe(ee,y,L)},onChange:e=>D(e.target.value),autoFocus:!0}),Object(T.jsx)(u.a,{color:"primary",onClick:oe.bind(void 0,ee,y,L)}),Object(T.jsx)("label",{for:"file-input",children:Object(T.jsx)(p.a,{color:"secondary",style:{marginLeft:"5px"}})}),Object(T.jsx)("input",{id:"file-input",type:"file",style:{display:"none"},onChange:e=>{N(!0),e.target.files[0].type.includes("image")?M(window.URL.createObjectURL(e.target.files[0])):e.target.files[0].type.includes("video")?V(window.URL.createObjectURL(e.target.files[0])):K(e.target.files[0].name)}})]})})})]})]})}}}]);
//# sourceMappingURL=7.202562c6.chunk.js.map