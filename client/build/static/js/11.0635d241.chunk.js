(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[11],{225:function(e,t,a){"use strict";a(49),a(234),a(2)},229:function(e,t,a){"use strict";var n=a(1),i=a(3),o=a(15),r=a(0),s=a(4),c=a(6),l=a(7),d=r.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,p=void 0!==u&&u,m=e.fixed,g=void 0!==m&&m,b=e.maxWidth,x=void 0===b?"lg":b,f=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(d,Object(n.a)({className:Object(s.a)(a.root,o,g&&a.fixed,p&&a.disableGutters,!1!==x&&a["maxWidth".concat(Object(l.a)(String(x)))]),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},234:function(e,t,a){"use strict";var n=a(1),i=a(3),o=a(0),r=a(4),s=a(7),c=a(6),l=a(53),d=a(10),u=a(49),p=o.forwardRef((function(e,t){var a=e.classes,c=e.className,p=e.color,m=void 0===p?"primary":p,g=e.component,b=void 0===g?"a":g,x=e.onBlur,f=e.onFocus,h=e.TypographyClasses,v=e.underline,j=void 0===v?"hover":v,O=e.variant,y=void 0===O?"inherit":O,w=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(l.a)(),k=C.isFocusVisible,S=C.onBlurVisible,W=C.ref,z=o.useState(!1),N=z[0],M=z[1],B=Object(d.a)(t,W);return o.createElement(u.a,Object(n.a)({className:Object(r.a)(a.root,a["underline".concat(Object(s.a)(j))],c,N&&a.focusVisible,"button"===b&&a.button),classes:h,color:m,component:b,onBlur:function(e){N&&(S(),M(!1)),x&&x(e)},onFocus:function(e){k(e)&&M(!0),f&&f(e)},ref:B,variant:y},w))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},235:function(e,t,a){"use strict";var n=a(1),i=a(0),o=a(6),r={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},s=function(e){return Object(n.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:r,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(n.a)({margin:0},s(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,i.createElement(i.Fragment,null,a)}))},237:function(e,t,a){"use strict";var n=a(29),i=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(0)),r=(0,n(a(31)).default)(o.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=r},241:function(e,t,a){"use strict";var n=a(3),i=a(1),o=a(0),r=a(4),s=a(6),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=o.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,g=e.container,b=void 0!==g&&g,x=e.direction,f=void 0===x?"row":x,h=e.item,v=void 0!==h&&h,j=e.justify,O=e.justifyContent,y=void 0===O?"flex-start":O,w=e.lg,C=void 0!==w&&w,k=e.md,S=void 0!==k&&k,W=e.sm,z=void 0!==W&&W,N=e.spacing,M=void 0===N?0:N,B=e.wrap,E=void 0===B?"wrap":B,F=e.xl,I=void 0!==F&&F,D=e.xs,L=void 0!==D&&D,R=e.zeroMinWidth,T=void 0!==R&&R,V=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(r.a)(d.root,u,b&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],v&&d.item,T&&d.zeroMinWidth,"row"!==f&&d["direction-xs-".concat(String(f))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(j||y)&&d["justify-content-xs-".concat(String(j||y))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==z&&d["grid-sm-".concat(String(z))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==I&&d["grid-xl-".concat(String(I))]);return o.createElement(m,Object(i.a)({className:G,ref:t},V))})),p=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(i.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=p},320:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(0),i=a(9),o=a(119),r=a(177),s=a(235),c=a(180),l=a(63),d=a(241),u=a(237),p=a.n(u),m=a(74),g=a.n(m),b=a(70),x=a(49),f=a(172),h=a(179),v=(a(75),a(225),a(229)),j=a(14),O=a.n(j),y=a(12),w=a(42),C=(a(123),a(2));w.a.configure();const k=Object(f.a)((e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0px 0px 3px 3px blue",padding:"30px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},main:{paddingTop:"30px",marginTop:"45px",height:"100vh",marginLeft:"100px",background:"linear-gradient(to right, #4682B4, #87CEEB)"}})));function S(e){const t=k(),[a,u]=(localStorage.getItem("token"),Object(n.useState)("")),[m,f]=Object(n.useState)(""),[j,S]=Object(n.useState)(""),[W,z]=Object(n.useState)(""),[N,M]=Object(n.useState)(""),[B,E]=Object(n.useState)(""),[F,I]=Object(n.useState)("none"),D=Object(i.b)();return Object(C.jsx)("div",{class:t.main,children:Object(C.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(s.a,{}),Object(C.jsxs)(b.a,{elevation:3,className:t.paper,children:[Object(C.jsx)(h.a,{style:{position:"fixed",top:"70px",display:F}}),Object(C.jsx)(o.a,{className:t.avatar,children:Object(C.jsx)(p.a,{})}),Object(C.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(C.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(C.jsx)(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Name",name:"name",value:a,onChange:e=>u(e.target.value),autoFocus:!0}),Object(C.jsx)(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:m,onChange:e=>f(e.target.value),autoFocus:!0}),Object(C.jsx)(r.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:e=>{e.preventDefault();let t={email:m};O.a.post(y.a+"/emailverify",t).then((e=>{I("none");const t=e.data;1==t.status?(w.a.info(t.msg,{autoClose:1e3}),E(t.otp)):w.a.error(t.msg,{autoClose:1e3}),E("12345")})).catch((e=>{I("none"),console.log(e)}))},children:"Send OTP"}),Object(C.jsx)(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:N,onChange:e=>M(e.target.value),autoFocus:!0}),Object(C.jsx)(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:j,onChange:e=>S(e.target.value),autoComplete:"current-password"}),Object(C.jsx)(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"password",value:W,onChange:e=>z(e.target.value),autoComplete:"current-password"}),"Add photo",Object(C.jsx)("label",{for:"file-input",children:Object(C.jsx)(g.a,{style:{color:"blue",width:"80px",cursor:"pointer"}})}),Object(C.jsx)("input",{id:"file-input",name:"file",type:"file",style:{display:"none"},onChange:e=>{document.getElementById("preview").setAttribute("src",window.URL.createObjectURL(e.target.files[0]))}}),Object(C.jsx)("img",{id:"preview",width:"100%",height:"100%"}),Object(C.jsx)(r.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:t=>{if(I("block"),t.preventDefault(),N!=B)return void w.a.error("Incorrect OTP",{autoClose:1e3});if(j.length<6)return void w.a.error("Password length must be at least 6",{autoClose:2e3});if(W!=j)return void w.a.error("Password and Confirm password don't match",{autoClose:2e3});const n=document.getElementById("file-input").files[0];let i=new FormData;i.append("name",a),i.append("email",m),i.append("pass",j),i.append("path",null===n||void 0===n?void 0:n.name),i.append("file",n),O.a.post(y.a+"/localSignup",i).then((t=>{I("none");const a=t.data;let i,o,r;1===a.status&&(w.a.success("Signed up successfully",{autoClose:1e3}),i=a.email,o=a.name,r=a.token,D({type:"load_user",payload:{name:o,email:i,path:null===n||void 0===n?void 0:n.name}}),localStorage.setItem("token",r),e.history.push("/"))})).catch((e=>{I("none"),console.log(e)}))},className:t.submit,children:"Sign Up"}),Object(C.jsxs)(d.a,{container:!0,children:[Object(C.jsx)(d.a,{item:!0,xs:!0,children:Object(C.jsx)(l.b,{to:"/changePassword",variant:"body2",children:"Forgot password?"})}),Object(C.jsx)(d.a,{item:!0,children:Object(C.jsx)(l.b,{to:"/signin",variant:"body2",children:"Already have an account?"})})]})]})]})]})})}}}]);
//# sourceMappingURL=11.0635d241.chunk.js.map