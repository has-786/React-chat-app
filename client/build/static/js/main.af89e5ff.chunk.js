(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{230:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=a(24),i=a(17),l=a(16),u=a(14),d=a(8),j=a(15),b=a.n(j),m="",p=a(276),h=a(278),g=a(2),O=Object(p.a)((function(e){return{root:{marginTop:"50vh"}}}));function x(){var e=O();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)("center",{children:Object(g.jsx)(h.a,{})})})}function f(e){var t=e.redirect;return Object(g.jsx)(i.a,{to:"/"+t})}var v=a(81),y=a.n(v),w=a(304),S=a(294),C=a(296),k=a(301),I=a(288),E=a(302),R=a(59),A=a(295),N=a(280),W=a(281),B=a(282),D=a(284),T=a(299),_=a(298),F=a(289),U=a(293),P=a(291),L=a(292),q=a(290),z=a(297),G=a(287),H=a(93),K=a.n(H),Y=a(144),M=a.n(Y),V=a(145),J=a.n(V),Q=a(105),X=a.n(Q),Z=a(58),$=a.n(Z),ee=(y()(),a(68)),te=a(139),ae=a.n(te),ne=a(143),re=a.n(ne),ce=a(286),oe=a(305),se=a(303),ie=a(20),le=a(283),ue=a(285),de=a(140),je=a.n(de),be=a(141),me=a.n(be),pe=a(142),he=a.n(pe),ge=240,Oe=Object(p.a)((function(e){return{root:{display:"flex"},drawer:Object(ee.a)({},e.breakpoints.up("sm"),{width:ge,flexShrink:0}),appBar:Object(ee.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(ge,"px)"),marginLeft:ge}),menuButton:Object(ee.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:ge},content:{flexGrow:1,padding:e.spacing(3)}}}));function xe(e){var t=e.window,a=void 0!==t?function(){return t().document.body}:void 0,c=Oe(),o=Object(ie.a)(),s=r.a.useState(!1),i=Object(d.a)(s,2),l=i[0],u=i[1],j=function(){u(!l)},p=Object(n.useState)([]),h=Object(d.a)(p,2),O=(h[0],h[1]),x=localStorage.getItem("token"),f=localStorage.getItem("name"),v=[["Home","/",ae.a],["Enter group","/enterroom",je.a],["Create group","/newroom",K.a],["Sign out","/signin",me.a]],y=b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(x)}});Object(n.useEffect)((function(){y.get("getRooms").then((function(e){var t=e.data;O(t.latest)})).catch((function(t){e.history.push("/signin")}))}),[]);var w=Object(g.jsxs)("div",{children:[Object(g.jsx)("center",{children:Object(g.jsx)(he.a,{style:{color:"blue",width:"70px",height:"70px"}})}),Object(g.jsx)("center",{children:Object(g.jsx)("p",{children:f})}),Object(g.jsx)("div",{className:c.toolbar,style:{marginTop:"-60px"}}),Object(g.jsx)(N.a,{}),Object(g.jsx)(W.a,{children:v.map((function(t,a){return Object(g.jsxs)(B.a,{button:!0,onClick:function(){var a;"Sign out"===t[0]?(a=e.history.push,localStorage.removeItem("token"),a("/signin")):e.history.push(t[1])},children:[Object(g.jsx)(le.a,{children:Object(n.createElement)(t[2],{})}),Object(g.jsx)(D.a,{primary:t[0]})]},t[0])}))})]});return Object(g.jsxs)("div",{style:{marginBottom:"5px"},children:[Object(g.jsx)(ue.a,{position:"static",className:c.appBar,children:Object(g.jsxs)(ce.a,{children:[Object(g.jsx)(G.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:c.menuButton,children:Object(g.jsx)(re.a,{})}),Object(g.jsx)(R.a,{variant:"h6",noWrap:!0,children:e.name})]})}),Object(g.jsxs)("nav",{className:c.drawer,"aria-label":"mailbox folders",children:[Object(g.jsx)(se.a,{smUp:!0,implementation:"css",children:Object(g.jsx)(oe.a,{container:a,variant:"temporary",anchor:"rtl"===o.direction?"right":"left",open:l,onClose:j,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0},children:w})}),Object(g.jsx)(se.a,{xsDown:!0,implementation:"css",children:Object(g.jsx)(oe.a,{classes:{paper:c.drawerPaper},variant:"permanent",open:!0,children:w})})]})]})}var fe=a(13);a(80);fe.a.configure();var ve=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ye(){return Object(g.jsxs)(R.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(I.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var we,Se=a(28),Ce=a(19),ke=a.n(Ce),Ie=a(40),Ee=a(149),Re=a(146),Ae=a(147),Ne=a.n(Ae),We=(a(230),new TextDecoder),Be=new TextEncoder,De=function(){var e=Object(Ie.a)(ke.a.mark((function e(t,a,n,r,c){var o,s,i=arguments;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>5&&void 0!==i[5]?i[5]:"AES-CBC",e.next=3,window.crypto.subtle.importKey("raw",Be.encode(t),{name:"PBKDF2"},!1,["deriveKey"]);case 3:return s=e.sent,e.next=6,window.crypto.subtle.deriveKey({name:"PBKDF2",salt:Be.encode(a),iterations:n,hash:c},s,{name:o,length:r},!1,["encrypt","decrypt"]);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),Te=function(e,t,a){var n;console.log(e),n=e,e=Uint8Array.from(atob(n),(function(e){return e.charCodeAt(0)})),console.log(e);return console.log(a),console.log(t),Object(Ie.a)(ke.a.mark((function n(){var r,c;return ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,De("my password",t,1e5,256,"SHA-256");case 2:return r=n.sent,n.next=5,window.crypto.subtle.decrypt({name:"AES-CBC",iv:a},r,e.slice(32));case 5:return c=n.sent,console.log(c),n.abrupt("return",We.decode(c));case 8:case"end":return n.stop()}}),n)})))()},_e=new TextEncoder,Fe=function(){var e=Object(Ie.a)(ke.a.mark((function e(t,a,n,r,c){var o,s=arguments;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>5&&void 0!==s[5]?s[5]:"AES-CBC",e.next=3,window.crypto.subtle.importKey("raw",_e.encode(t),{name:"PBKDF2"},!1,["deriveKey"]);case 3:return we=e.sent,e.next=6,window.crypto.subtle.deriveKey({name:"PBKDF2",salt:_e.encode(a),iterations:n,hash:c},we,{name:o,length:r},!1,["encrypt","decrypt"]);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),Ue=function(e,t,a){return console.log("salt "+t+" iv "+a),console.log(e),e=_e.encode(e),console.log(e),Object(Ie.a)(ke.a.mark((function n(){var r,c,o;return ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Fe("my password",t,1e5,256,"SHA-256");case 2:return r=n.sent,n.next=5,window.crypto.subtle.encrypt({name:"AES-CBC",iv:a},r,e);case 5:return c=n.sent,console.log("Encrypted ".concat(c)),s=[].concat(Object(Se.a)(t),Object(Se.a)(a),Object(Se.a)(new Uint8Array(c))),o=btoa(String.fromCharCode.apply(String,Object(Se.a)(new Uint8Array(s)))),console.log("concatennated ".concat(o)),n.abrupt("return",o);case 10:case"end":return n.stop()}var s}),n)})))()},Pe=void 0,Le=Object(p.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},heading:{textAlign:"justifyContent"},footer:{float:"right"},messageBox:{display:"flex",flexWrap:"wrap",backgroundColor:"beige"},main:{backgroundColor:"beige",height:"100%",paddingTop:"70px",width:"100%"},container:{width:"300px",margin:"auto",minHeight:"70vh",padding:"2px",borderRadius:"10px",border:"2px solid pink"},msgs:{width:"250px",marginBottom:"10px"},sendbox:{width:"100%"},download:{marginRight:"-15px",color:"white"}}),qe=function(e){var t=localStorage.getItem("email"),a=localStorage.getItem("name"),r=new Audio("../incoming.mp3"),c=Le(),o=Object(l.c)((function(e){return e.chatReducer})),s=Object(l.b)(),i=Object(n.useState)(e.match.params.room),j=Object(d.a)(i,2),p=j[0],O=(j[1],Object(n.useState)("")),x=Object(d.a)(O,2),f=x[0],v=x[1],w=Object(n.useState)(!1),S=Object(d.a)(w,2),C=(S[0],S[1],y()(m,{transports:["websocket","polling"]})),k=localStorage.getItem("token"),I=b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(k)}});Object(n.useEffect)((function(){return C.emit("create",p),C.emit("new-user-joined",a,p),function(e){if(o[e])return;I.post("getMessages",{room:e}).then((function(t){var a=t.data;if(1==a.status){function n(){return r.apply(this,arguments)}function r(){return(r=Object(Ie.a)(ke.a.mark((function t(){return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ie.a)(ke.a.mark((function t(){var n,r,c;return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.msgs,r=ke.a.mark((function e(t){var a,r,c;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n[t],console.log(a),a.path){e.next=13;break}for(console.log("salt "+a.salt),console.log("iv "+a.iv),a.salt=a.salt.split(","),a.iv=a.iv.split(","),r=0;r<a.salt.length;r++)a.salt[r]=parseInt(a.salt[r]);for(c=0;c<a.iv.length;c++)a.iv[c]=parseInt(a.iv[c]);return a.salt=new Uint8Array(a.salt),a.iv=new Uint8Array(a.iv),e.next=13,Te(a.message,a.salt,a.iv).then((function(e){a.message=e}));case 13:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<n.length)){t.next=8;break}return t.delegateYield(r(c),"t0",5);case 5:c++,t.next=3;break;case 8:s({type:"load_chat",payload:{room:e,msgs:n}});case 9:case"end":return t.stop()}}),t)})))();case 2:window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"});case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n()}})).catch((function(e){}))}(p),C.on("user-joined",(function(e){})),C.on("user-left",(function(e){alert("".concat(e," left from group ").concat(p))})),C.on("receiveimg",(function(e){t===e.email&&(document.getElementById("loader").style.display="none",s({type:"add_chat",payload:{room:p,msg:e}}))})),C.on("receive",(function(e){t!==e.email&&(console.log("received"),e.path?setTimeout((function(){return window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})}),500):(console.log(e.salt,e.iv),e.salt=e.salt.split(","),e.iv=e.iv.split(","),e.salt=new Uint8Array(e.salt),e.iv=new Uint8Array(e.iv),Te(e.message,e.salt,e.iv).then((function(t){e.message=t,window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})}))),s({type:"add_chat",payload:{room:p,msg:e}}),r.play())})),function(){C.disconnect()}}),[]);function E(){return(E=Object(Ie.a)(ke.a.mark((function e(){var n,r,c,o,s,i,l;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("file-input").files[0],document.getElementById("file-input").value){e.next=3;break}return e.abrupt("return");case 3:if(document.getElementById("file-input").value="",document.getElementById("loader").style.display="block",r=(new Date).getHours(),c=(new Date).getMinutes(),r=0==parseInt(r/10)?"0"+r:r,c=0==parseInt(c/10)?"0"+c:c,o=r+":"+c,s=2,(n.name.toLowerCase().includes(".jpg")||n.name.toLowerCase().includes(".png"))&&(s=1),1!=s){e.next=17;break}i={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},Object(Re.a)(n,i).then((function(e){C.emit("send",{flag:s,email:t,room:p,name:a,path:n.name,img:e,time:o})})).catch((function(e){alert(e.message),console.log(e.message)})),e.next=22;break;case 17:return(l=new FileReader).readAsDataURL(n),e.next=21,function(){var e=l.result.replace(/^data:.+;base64,/,"");C.emit("send",{flag:s,email:t,room:p,name:a,path:n.name,img:e,time:o})};case 21:l.onloadend=e.sent;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R={backgroundColor:"blue",color:"white",marginLeft:"auto"};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{position:"fixed",width:"100%"},children:[Object(g.jsx)(xe,Object(u.a)({name:p},e)),Object(g.jsx)("center",{children:Object(g.jsx)(h.a,{id:"loader",style:{color:"lightgreen",marginTop:"100px",display:"none"}})})]}),Object(g.jsxs)("div",{class:c.main,children:[Object(g.jsx)("div",{class:c.container,id:"container",children:Object(g.jsx)("div",{id:"messages",class:c.messageBox,children:void 0!=o[p]?o[p].map((function(e,a){var n=t===e.email?R:{};return Object(g.jsx)(Ee.a,{elevation:3,className:c.msgs,style:n,children:0==e.flag?Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)("b",{children:e.name}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:e.message}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{style:{float:"right"},children:e.time})]}):1==e.flag?Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)("b",{children:e.name}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:"/uploads/".concat(e.path,"/").concat(k),height:"100%",width:"100%"})}),Object(g.jsx)("span",{style:{float:"right"},children:e.time})]}):Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)("b",{children:e.name}),Object(g.jsx)("br",{}),Object(g.jsxs)("video",{width:"100%",height:"100%",controls:!0,children:[Object(g.jsx)("source",{src:"/uploads/"+e.path,type:"video/mp4"}),Object(g.jsx)("source",{src:"/uploads/"+e.path,type:"video/ogg"})]}),Object(g.jsx)("span",{style:{float:"right"},children:e.time})]})})})):null})}),Object(g.jsxs)("center",{children:[Object(g.jsxs)("div",{class:c.sendbox,children:[Object(g.jsx)("input",{type:"text",placeholder:"Type your message here",value:f,onChange:function(e){return v(e.target.value)},autoFocus:!0}),Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(e,a,n){if(""!==n){var r=(new Date).getHours(),c=(new Date).getMinutes(),o=(r=0==parseInt(r/10)?"0"+r:r)+":"+(c=0==parseInt(c/10)?"0"+c:c),i=n;document.getElementById("loader").style.display="block";var l=window.crypto.getRandomValues(new Uint8Array(16)),u=window.crypto.getRandomValues(new Uint8Array(16));console.log(l,u),s({type:"add_chat",payload:{room:a,msg:{flag:0,email:t,room:a,name:e,message:n,time:o}}}),Ue(i,l,u).then((function(n){console.log(n),l=Object(Se.a)(l),u=Object(Se.a)(u),l=l.join(","),u=u.join(","),C.emit("send",{flag:0,email:t,room:a,name:e,msg:n,salt:l,iv:u,time:o}),document.getElementById("loader").style.display="none",console.log("sent"),v("")}))}}.bind(Pe,a,p,f),children:"Send"})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{class:c.sendbox,children:[Object(g.jsx)("label",{for:"file-input",children:Object(g.jsx)(Ne.a,{style:{color:"blue",width:"80px",cursor:"pointer"}})}),Object(g.jsx)("input",{id:"file-input",type:"file",style:{display:"none"}}),Object(g.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return E.apply(this,arguments)}.bind(Pe),children:"Send"})]})]})]})]})},ze=a(300),Ge=a(66),He=a.n(Ge);function Ke(){return Object(g.jsxs)(R.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(s.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}fe.a.configure();var Ye=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},tabLink:{display:"flex",alignItems:"center",justifyContent:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Me(){return Object(g.jsxs)(R.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(s.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}fe.a.configure();var Ve=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));fe.a.configure();var Je=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));fe.a.configure();var Qe=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var Xe,Ze,$e=a(57),et=a(106),tt=Object($e.c)({groupReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rooms:[],latest:[],exist:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_group":return t.payload;case"add_my_group":return Object(u.a)(Object(u.a)({},e),{},{rooms:[].concat(Object(Se.a)(e.rooms),[t.payload]),latest:[].concat(Object(Se.a)(e.latest),[t.payload])});case"add_latest_group":return e.latest.includes(t.payload)?e:Object(u.a)(Object(u.a)({},e),{},{latest:[].concat(Object(Se.a)(e.latest),[t.payload])});case"exit_group":return Object(u.a)(Object(u.a)({},e),{},{latest:e.latest.filter((function(e){return e!=t.payload}))});case"edit_group":return Object(u.a)(Object(u.a)({},e),{},{exist:!1});case"delete_my_group":return Object(u.a)(Object(u.a)({},e),{},{rooms:e.rooms.filter((function(e){return e!=t.payload})),latest:e.latest.filter((function(e){return e!=t.payload}))});default:return e}},chatReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"load_chat":return a[t.payload.room]=t.payload.msgs,a;case"add_chat":return a[t.payload.room]=[].concat(Object(Se.a)(a[t.payload.room]),[t.payload.msg]),a;default:return e}}}),at=Object($e.d)(tt,[],Object($e.a)(et.a));o.a.render(Object(g.jsx)(l.a,{store:at,children:Object(g.jsx)(s.a,{children:Object(g.jsxs)(i.d,{children:[Object(g.jsx)(i.b,{exact:!0,path:"/",component:(Xe=function(e){var t=this,a=ve(),c=Object(l.b)(),o=r.a.useState(!1),s=Object(d.a)(o,2),i=s[0],j=s[1],p=r.a.useState(!1),h=Object(d.a)(p,2),O=h[0],x=h[1],f=r.a.useState(null),v=Object(d.a)(f,2),y=v[0],I=v[1],R=r.a.useState(""),H=Object(d.a)(R,2),Y=H[0],V=H[1],Q=function(){I(null),j(!1)},Z=function(){I(null),x(!1)},ee=localStorage.getItem("token"),te=b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(ee)}}),ae=Object(l.c)((function(e){return e.groupReducer.exist}));Object(n.useEffect)((function(){ae||te.get("getRooms").then((function(e){var t=e.data;1==t.status&&c({type:"load_group",payload:{latest:t.latest,rooms:t.rooms,exist:!0}})})).catch((function(t){alert(t),e.history.push("/signin")}))}),[]);var ne=function(t){te.post("exitRoom",{room:t}).then((function(e){1==e.data.status?c({type:"exit_group",payload:t}):fe.a.error("Something went wrong")})).catch((function(t){alert(t),e.history.push("/signin")}))},re=Object(l.c)((function(e){return e.groupReducer.rooms})),ce=Object(l.c)((function(e){return e.groupReducer.latest}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(xe,Object(u.a)({name:"Home"},e)),Object(g.jsxs)(F.a,{open:i,onClose:Q,"aria-labelledby":"form-dialog-title",children:[Object(g.jsxs)(q.a,{id:"form-dialog-title",children:["Edit password for group ",y]}),Object(g.jsxs)(P.a,{children:[Object(g.jsx)(L.a,{children:"Enter new password below"}),Object(g.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"name",label:"Password",value:Y,onChange:function(e){return V(e.target.value)},type:"password",fullWidth:!0})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(S.a,{onClick:function(){Q(),V("")},color:"primary",children:"Cancel"}),Object(g.jsx)(S.a,{onClick:function(){var t;t=y,te.post("editRoom",{room:t,newPassword:Y}).then((function(e){1==e.data.status?(fe.a.success("Password updated successfully for room ".concat(t)),c({type:"edit_group"})):fe.a.error("Something went wrong")})).catch((function(t){alert(t),e.history.push("/signin")})),Q(),V("")},color:"primary",children:"Confirm"})]})]}),Object(g.jsxs)(F.a,{open:O,onClose:Z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(q.a,{id:"alert-dialog-title",children:"Delete group"}),Object(g.jsx)(P.a,{children:Object(g.jsxs)(L.a,{id:"alert-dialog-description",children:["Are you sure want to delete group ",y]})}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(S.a,{onClick:Z,color:"primary",children:"No"}),Object(g.jsx)(S.a,{onClick:function(){var t;t=y,te.post("deleteRoom",{room:t}).then((function(e){1==e.data.status?c({type:"delete_my_group",payload:t}):fe.a.error("Something went wrong")})).catch((function(t){fe.a.error(t),e.history.push("/signin")})),Z()},color:"primary",autoFocus:!0,children:"Yes"})]})]}),Object(g.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(z.a,{color:"primary",style:{height:"50px",width:"50px",float:"right"},"aria-label":"New Room",onClick:function(){return e.history.push("/newroom")},children:Object(g.jsx)(K.a,{})}),Object(g.jsx)(N.a,{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h6",{children:"My Groups"}),Object(g.jsx)(N.a,{}),Object(g.jsx)(W.a,{children:re.sort((function(e,t){return e<t?-1:1})).map((function(t,a){return Object(g.jsxs)(B.a,{button:!0,onClick:function(){return e.history.push("/chat/".concat(t))},children:[Object(g.jsx)(_.a,{children:Object(g.jsx)(w.a,{children:Object(g.jsx)($.a,{color:"primary"})})}),Object(g.jsx)(D.a,{primary:t}),Object(g.jsxs)(T.a,{children:[Object(g.jsx)(G.a,{edge:"end","aria-label":"delete",children:Object(g.jsx)(M.a,{color:"primary",onClick:function(){I(t),j(!0)}})}),Object(g.jsx)(G.a,{edge:"end","aria-label":"delete",children:Object(g.jsx)(J.a,{color:"secondary",onClick:function(){I(t),x(!0)}})})]})]},t)}))}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("h6",{children:"All Groups"}),Object(g.jsx)(N.a,{}),Object(g.jsx)(W.a,{children:ce.sort((function(e,t){return e<t?-1:1})).map((function(a,n){return Object(g.jsxs)(B.a,{button:!0,onClick:function(){return e.history.push("/chat/".concat(a))},children:[Object(g.jsx)(_.a,{children:Object(g.jsx)(w.a,{children:Object(g.jsx)($.a,{color:"primary"})})}),Object(g.jsx)(D.a,{primary:a}),Object(g.jsx)(T.a,{children:Object(g.jsx)(G.a,{edge:"end","aria-label":"delete",onClick:ne.bind(t,a),children:Object(g.jsx)(X.a,{color:"secondary"})})})]},a)}))})]}),Object(g.jsx)(E.a,{mt:8,className:a.footer,children:Object(g.jsx)(ye,{})})]})]})},Ze=f,function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(l.c)((function(e){return e.groupReducer.exist}));return Object(n.useEffect)((function(){if(o)c(1);else{var e=localStorage.getItem("token");b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data,c(1)})).catch((function(e){c(2)}))}}),[]),0==r?Object(g.jsx)(x,{}):1==r?Object(g.jsx)(Xe,Object(u.a)({},e)):Object(g.jsx)(Ze,{redirect:"signin"})})}),Object(g.jsx)(i.b,{path:"/signin",component:function(e){var t=Ye(),a=(localStorage.getItem("token"),Object(n.useState)("")),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1];return Object(g.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(C.a,{}),Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(w.a,{className:t.avatar,children:Object(g.jsx)(He.a,{})}),Object(g.jsx)(R.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(g.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return o(e.target.value)},autoFocus:!0}),Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:u,onChange:function(e){return j(e.target.value)},autoComplete:"current-password"}),Object(g.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){t.preventDefault();var a={email:c,pass:u};b.a.post("/localSignin",a).then((function(t){var a=t.data,n=null,r=null,c=null;1==a.status?(n=a.email,r=a.name,c=a.token,fe.a.success("Signed in successfully"),localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("token",c),e.history.push("/")):fe.a.error("Something went wrong")})).catch((function(e){return fe.a.error("Something went wrong")}))},className:t.submit,children:"Sign In"}),Object(g.jsxs)(ze.a,{container:!0,children:[Object(g.jsx)(ze.a,{item:!0,xs:!0,children:Object(g.jsx)(s.b,{href:"#",children:"Forgot password?"})}),Object(g.jsx)(ze.a,{item:!0,children:Object(g.jsx)(s.b,{to:"/signup",variant:"body2",children:"Don't have an account?"})})]})]})]}),Object(g.jsx)(E.a,{mt:8,children:Object(g.jsx)(Ke,{})})]})}}),Object(g.jsx)(i.b,{path:"/signup",component:function(e){var t=Ve(),a=(localStorage.getItem("token"),Object(n.useState)("")),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),h=p[0],O=p[1],x=Object(n.useState)(""),f=Object(d.a)(x,2),v=f[0],y=f[1],I=Object(n.useState)(""),N=Object(d.a)(I,2),W=N[0],B=N[1],D=Object(n.useState)(""),T=Object(d.a)(D,2),_=T[0],F=T[1];return Object(g.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(C.a,{}),Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(w.a,{className:t.avatar,children:Object(g.jsx)(He.a,{})}),Object(g.jsx)(R.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(g.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Name",name:"name",value:c,onChange:function(e){return o(e.target.value)},autoFocus:!0}),Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:u,onChange:function(e){return j(e.target.value)},autoFocus:!0}),Object(g.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:function(e){e.preventDefault();var t={email:u};b.a.post("/emailverify",t).then((function(e){var t=e.data;1==t.status?(fe.a.info(t.msg),F(t.otp)):fe.a.error(t.msg)})).catch((function(e){return console.log(e)}))},children:"Send OTP"}),Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:W,onChange:function(e){return B(e.target.value)},autoFocus:!0}),Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:h,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"}),Object(g.jsx)(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:v,onChange:function(e){return y(e.target.value)},autoComplete:"current-password"}),Object(g.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){if(t.preventDefault(),W==_){v!=h&&Object(fe.a)("Password and Confirm password don't match");var a={name:c,email:u,pass:h};b.a.post("/localSignup",a).then((function(t){var a=t.data,n=null,r=null,c=null;1==a.status&&(fe.a.success("Signed up successfully"),n=a.email,r=a.name,c=a.token,localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("token",c),e.history.push("/"))})).catch((function(e){return console.log(e)}))}else fe.a.error("Incorrect OTP")},className:t.submit,children:"Sign Up"}),Object(g.jsxs)(ze.a,{container:!0,children:[Object(g.jsx)(ze.a,{item:!0,xs:!0,children:Object(g.jsx)(s.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(g.jsx)(ze.a,{item:!0,children:Object(g.jsx)(s.b,{to:"/signin",variant:"body2",children:"Already have an account?"})})]})]})]}),Object(g.jsx)(E.a,{mt:8,children:Object(g.jsx)(Me,{})})]})}}),Object(g.jsx)(i.b,{path:"/enterroom",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(d.a)(r,2),o=c[0],s=c[1],i=Object(l.c)((function(e){return e.groupReducer.exist}));return Object(n.useEffect)((function(){if(i)s(1);else{var e=localStorage.getItem("token");b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data;s(1)})).catch((function(e){s(2)}))}})),0==o?Object(g.jsx)(x,{}):1==o?Object(g.jsx)(e,Object(u.a)({},a)):Object(g.jsx)(t,{redirect:"signin"})}}((function(e){var t=Qe(),a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),j=Object(d.a)(i,2),p=j[0],h=j[1],O=Object(l.b)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(xe,Object(u.a)({name:"Enter Group"},e)),Object(g.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(C.a,{}),Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(w.a,{className:t.avatar,children:Object(g.jsx)($.a,{})}),Object(g.jsx)(R.a,{component:"h1",variant:"h5",children:"Enter Group"}),Object(g.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(g.jsxs)(ze.a,{container:!0,spacing:2,children:[Object(g.jsx)(ze.a,{item:!0,xs:12,children:Object(g.jsx)(k.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Group Name",name:"email",autoComplete:"email",value:c,onChange:function(e){return o(e.target.value)},autoFocus:!0})}),Object(g.jsx)(ze.a,{item:!0,xs:12,children:Object(g.jsx)(k.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,onChange:function(e){return h(e.target.value)},autoComplete:"current-password"})})]}),Object(g.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault();var a=localStorage.getItem("token"),n=b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(a)}}),r={name:c,pass:p};n.post("enterroom",r).then((function(t){var a=t.data;1==a.status?(O({type:"add_latest_group",payload:c}),e.history.push("/chat/".concat(c))):fe.a.error(a.msg)})).catch((function(t){fe.a.error(t),e.history.push("/signin")}))},children:"Enter"}),Object(g.jsx)(ze.a,{container:!0,children:Object(g.jsx)(ze.a,{item:!0,xs:!0,children:Object(g.jsx)(s.b,{to:"/newroom",variant:"body2",children:"Create New Group"})})})]})]})]})]})}),f)}),Object(g.jsx)(i.b,{path:"/newroom",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(d.a)(r,2),o=c[0],s=c[1],i=Object(l.c)((function(e){return e.groupReducer.exist}));return Object(n.useEffect)((function(){if(i)s(1);else{var e=localStorage.getItem("token");b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data;s(1)})).catch((function(e){s(2)}))}}),[]),0==o?Object(g.jsx)(x,{}):1==o?Object(g.jsx)(e,Object(u.a)({},a)):Object(g.jsx)(t,{redirect:"signin"})}}((function(e){var t=Je(),a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),j=Object(d.a)(i,2),p=j[0],h=j[1],O=Object(l.b)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(xe,Object(u.a)({name:"Create Group"},e)),Object(g.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(C.a,{}),Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(w.a,{className:t.avatar,children:Object(g.jsx)($.a,{})}),Object(g.jsx)(R.a,{component:"h1",variant:"h5",children:"Create Group"}),Object(g.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(g.jsxs)(ze.a,{container:!0,spacing:2,children:[Object(g.jsx)(ze.a,{item:!0,xs:12,children:Object(g.jsx)(k.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Group Name",name:"email",value:c,onChange:function(e){return o(e.target.value)},autoComplete:"email",autoFocus:!0})}),Object(g.jsx)(ze.a,{item:!0,xs:12,children:Object(g.jsx)(k.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,onChange:function(e){return h(e.target.value)},autoComplete:"current-password"})})]}),Object(g.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault();var a=localStorage.getItem("token"),n=b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(a)}}),r={name:c,pass:p};n.post("newroom",r).then((function(t){var a=t.data;1==a.status?(fe.a.success(a.msg),O({type:"add_my_group",payload:c}),e.history.push("/")):fe.a.error(a.msg)})).catch((function(t){fe.a.error(t),e.history.push("/signin")}))},children:"Create"}),Object(g.jsx)(ze.a,{container:!0,children:Object(g.jsx)(ze.a,{item:!0,xs:!0,children:Object(g.jsx)(s.b,{to:"/enterroom",variant:"body2",children:"Enter Already Existing Group"})})})]})]})]})]})}),f)}),Object(g.jsx)(i.b,{exact:!0,path:"/chat/:room",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(d.a)(r,2),o=c[0],s=c[1],i=Object(n.useState)("signin"),j=Object(d.a)(i,2),p=j[0],h=j[1],O=a.match.params.room,f=Object(l.c)((function(e){return e.groupReducer.exist})),v=Object(l.c)((function(e){return e.groupReducer.latest}));return Object(n.useEffect)((function(){if(f)v.includes(O)?s(1):(h("enterroom"),s(2));else{var e=localStorage.getItem("token");b.a.create({baseURL:m,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data.latest.includes(O)?s(1):(h("enterroom"),s(2))})).catch((function(e){s(2)}))}}),[]),0==o?Object(g.jsx)(x,{}):1==o?Object(g.jsx)(e,Object(u.a)({},a)):Object(g.jsx)(t,{redirect:p})}}(qe,f)})]})})}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.af89e5ff.chunk.js.map