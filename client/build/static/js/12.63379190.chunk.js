(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[12],{225:function(e,t,n){"use strict";n(49),n(234),n(2)},229:function(e,t,n){"use strict";var a=n(1),i=n(3),r=n(15),c=n(0),o=n(4),s=n(6),l=n(7),d=c.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.component,d=void 0===s?"div":s,u=e.disableGutters,p=void 0!==u&&u,b=e.fixed,m=void 0!==b&&b,h=e.maxWidth,j=void 0===h?"lg":h,g=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(d,Object(a.a)({className:Object(o.a)(n.root,r,m&&n.fixed,p&&n.disableGutters,!1!==j&&n["maxWidth".concat(Object(l.a)(String(j)))]),ref:t},g))}));t.a=Object(s.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(0);var a=n(172),i=n(113),r=n(114),c=n(49),o=n(71),s=n(233),l=n.n(s),d=n(119),u=n(12),p=n(2);const b=Object(a.a)((e=>({root:{flexGrow:1,marginTop:"-50px"},arrowBtn:{marginRight:"10px"},title:{color:"#F5F5DC\t",fontSize:"16px"}})));function m(e){const t=b(),n=localStorage.getItem("token");return Object(p.jsx)("div",{className:t.root,children:Object(p.jsx)(i.a,{position:"static",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(o.a,{edge:"start",className:t.arrowBtn,color:"inherit","aria-label":"menu",children:Object(p.jsx)(l.a,{onClick:()=>e.history.goBack()})}),e.dp?Object(p.jsx)(o.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(p.jsx)(d.a,{src:u.a+"/uploads/".concat(e.dp,"/").concat(n),style:{backgroundColor:"lightgrey",width:"40px",height:"40px"}})}):null,Object(p.jsx)(c.a,{variant:"h6",className:t.title,children:e.name})]})})})}},233:function(e,t,n){"use strict";var a=n(29),i=n(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),c=(0,a(n(31)).default)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=c},234:function(e,t,n){"use strict";var a=n(1),i=n(3),r=n(0),c=n(4),o=n(7),s=n(6),l=n(53),d=n(10),u=n(49),p=r.forwardRef((function(e,t){var n=e.classes,s=e.className,p=e.color,b=void 0===p?"primary":p,m=e.component,h=void 0===m?"a":m,j=e.onBlur,g=e.onFocus,x=e.TypographyClasses,f=e.underline,O=void 0===f?"hover":f,v=e.variant,y=void 0===v?"inherit":v,k=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(l.a)(),C=w.isFocusVisible,R=w.onBlurVisible,B=w.ref,W=r.useState(!1),S=W[0],L=W[1],E=Object(d.a)(t,B);return r.createElement(u.a,Object(a.a)({className:Object(c.a)(n.root,n["underline".concat(Object(o.a)(O))],s,S&&n.focusVisible,"button"===h&&n.button),classes:x,color:b,component:h,onBlur:function(e){S&&(R(),L(!1)),j&&j(e)},onFocus:function(e){C(e)&&L(!0),g&&g(e)},ref:E,variant:y},k))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},265:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k})),n.d(t,"connect",(function(){return y}));var a=n(0),i=n.n(a),r=n(9),c=n(119),o=n(177),s=n(172),l=n(229),d=n(110),u=n(176),p=n(74),b=n.n(p),m=n(179),h=(n(225),n(14)),j=n.n(h),g=n(12),x=n(232),f=n(42),O=(n(123),n(2));f.a.configure();const v=Object(s.a)((e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},main:{paddingTop:"25px",marginTop:"45px",height:"100vh",marginLeft:"100px",background:"linear-gradient(to right, #4682B4, #87CEEB)"}}))),y=(e,t,n,a)=>{e.post("setFriend",{option:a,profile:n}).then((e=>{1==e.data.status&&t({type:"set_friend",payload:{option:a,profile:n}})})).catch((e=>{alert(e)}))};function k(e){const t=v(),n=Object(r.b)(),[s,p]=Object(a.useState)("Not connected"),[h,k]=Object(a.useState)("Connect"),[w,C]=i.a.useState(!1),R=localStorage.getItem("token"),B=Object(r.c)((e=>e.profileReducer)),W=B.email,S=B.path;B.email||e.history.push("/");const L=j.a.create({baseURL:g.a,headers:{Authorization:"bearer ".concat(R)}}),E=Object(r.c)((e=>e.friendReducer.exist)),F=Object(r.c)((e=>e.userReducer.email)),N=Object(r.c)((e=>e.userReducer.name)),D=Object(r.c)((e=>e.friendReducer.friends)),I=Object(r.c)((e=>e.friendReducer.pendings)),T=Object(r.c)((e=>e.friendReducer.sent)),z=()=>{C(!1)};return Object(a.useEffect)((()=>{null!==D&&void 0!==D&&D.find((e=>e.email==W))?(p("Connected"),k("Disconnect")):null!==I&&void 0!==I&&I.find((e=>e.email==W))?(p("Pending"),k("Accept")):null!==T&&void 0!==T&&T.find((e=>e.email==W))?(p("Request sent"),k("Cancel request")):(p("Not Connected"),k("Connect")),E||L.get("getFriend").then((e=>{const t=e.data;1==t.status&&(n({type:"load_friend",payload:{pendings:t.pendings,friends:t.friends,sent:t.sent,exist:!0}}),n({type:"load_user",payload:{name:t.name,email:t.email,path:t.path,exist:!0}}))})).catch((t=>{alert(t),e.history.push("/signin")}))}),[T,D,I]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{position:"fixed",width:"90%",zIndex:10,marginLeft:"240px",marginTop:"45px"},children:Object(O.jsx)(x.a,{name:"Profile",...e})}),Object(O.jsxs)("div",{class:t.main,children:[Object(O.jsx)("center",{children:Object(O.jsx)(m.a,{id:"loader",style:{marginTop:"100px",display:"none"}})}),Object(O.jsx)(d.a,{open:w,onClose:z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:F===W?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{children:"Change Profile Picure"}),Object(O.jsx)("label",{for:"file-input",children:Object(O.jsx)(b.a,{style:{color:"blue",width:"80px",cursor:"pointer"}})}),Object(O.jsx)("input",{id:"file-input",name:"file",type:"file",style:{display:"none"},onChange:e=>{document.getElementById("preview").setAttribute("src",window.URL.createObjectURL(e.target.files[0]))}}),Object(O.jsx)("center",{children:Object(O.jsx)("img",{id:"preview",src:g.a+"/uploads/".concat(S,"/").concat(R),width:"300px",height:"300px",alt:""})}),Object(O.jsx)(o.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:()=>{let e=document.getElementById("file-input").files[0];if(!document.getElementById("file-input").value)return;z(),document.getElementById("file-input").value="",document.getElementById("loader").style.display="block";let t=new FormData;t.append("file",e),t.append("path",e.name),L.post("updateDp",t).then((t=>{const a=t.data;1==a.status?(e&&(e.value=""),document.getElementById("loader").style.display="none",n({type:"load_user",payload:{name:N,email:F,path:e.name}}),localStorage.setItem("token",a.token)):f.a.error("Something went wrong",{autoClose:1e3})})).catch((e=>f.a.error("Something went wrong",{autoClose:1e3})))},children:"Upload"})]}):Object(O.jsx)("center",{children:Object(O.jsx)("img",{id:"preview",src:g.a+"/uploads/".concat(S,"/").concat(R),width:"300px",height:"300px",alt:""})})}),Object(O.jsxs)(l.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)("center",{children:Object(O.jsx)(c.a,{src:g.a+"/uploads/".concat(S,"/").concat(R),style:{borderColor:"#00008B",color:"lightgrey",width:"70px",height:"70px"},onClick:()=>{C(!0)}})}),Object(O.jsx)("center",{children:Object(O.jsx)("p",{children:B.name})}),F!==W?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("center",{children:[Object(O.jsx)("p",{children:s}),Object(O.jsx)("button",{class:"btn btn-sm btn-danger",onClick:y.bind(this,L,n,B,h),children:h}),"Pending"===s?Object(O.jsx)("button",{class:"btn btn-sm btn-danger",onClick:y.bind(this,L,n,B,"Disconnect"),children:"Decline"}):null]})}):null]})]})]})}}}]);
//# sourceMappingURL=12.63379190.chunk.js.map