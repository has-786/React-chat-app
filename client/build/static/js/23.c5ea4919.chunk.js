(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[23],{366:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var r=t(5),n=t(0),o=t(380),s=t(357),c=t(359),i=t(375),l=t(47),u=t(218),d=t(193),m=t(139),j=t.n(m),b=t(355),h=t(113),p=t(358),g=t(9),f=t.n(g),O=t(8),w=t(129),v=(t(128),t(2));function x(){return Object(v.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(l.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}w.a.configure();var C=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function y(e){var a=C(),t=localStorage.getItem("token"),m=Object(n.useState)(""),h=Object(r.a)(m,2),g=h[0],y=h[1],S=Object(n.useState)(""),P=Object(r.a)(S,2),W=P[0],k=P[1],N=Object(n.useState)(""),T=Object(r.a)(N,2),q=T[0],D=T[1],F=Object(n.useState)(""),I=Object(r.a)(F,2),A=I[0],E=I[1],J=Object(n.useState)(""),Y=Object(r.a)(J,2),z=Y[0],B=Y[1],H=f.a.create({baseURL:O.a,headers:{Authorization:"bearer ".concat(t)}});return Object(v.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(c.a,{}),Object(v.jsxs)("div",{className:a.paper,children:[Object(v.jsx)(o.a,{className:a.avatar,children:Object(v.jsx)(j.a,{})}),Object(v.jsx)(b.a,{component:"h1",variant:"h5",children:"Change password"}),Object(v.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(v.jsx)(i.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:g,onChange:function(e){return y(e.target.value)},autoFocus:!0}),Object(v.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:a.submit,onClick:function(e){e.preventDefault();var a={email:g};H.post("forgotPassword",a).then((function(e){var a=e.data;1==a.status?(w.a.info(a.msg,{autoClose:1e3}),B(a.otp)):w.a.error("Something went wrong",{autoClose:1e3})})).catch((function(e){console.log(e),w.a.error("Something went wrong",{autoClose:1e3})}))},children:"Send OTP"}),Object(v.jsx)(i.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:A,onChange:function(e){return E(e.target.value)},autoFocus:!0}),Object(v.jsx)(i.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:W,onChange:function(e){return k(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(i.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:q,onChange:function(e){return D(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(a){if(a.preventDefault(),A==z){q!=W&&Object(w.a)("Password and Confirm password don't match",{autoClose:1e3});var t={email:g,password:W};H.post("changePassword",t).then((function(a){1==a.data.status?(w.a.success("Password was changed successfully",{autoClose:2e3}),e.history.push("/")):w.a.error("Something went wrong")})).catch((function(e){console.log(e),w.a.error("Something went wrong")}))}else w.a.error("Incorrect OTP",{autoClose:1e3})},className:a.submit,children:"Submit"}),Object(v.jsx)(u.a,{container:!0,children:Object(v.jsx)(u.a,{item:!0,xs:!0,children:Object(v.jsx)(l.b,{href:"#",variant:"body2",children:"Back to Home"})})})]})]}),Object(v.jsx)(d.a,{mt:8,children:Object(v.jsx)(x,{})})]})}}}]);
//# sourceMappingURL=23.c5ea4919.chunk.js.map