(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[21],{156:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));t(0);var n=t(113),r=t(220),c=t(221),i=t(349),s=t(222),o=t(133),l=t.n(o),u=t(2),j=Object(n.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function d(e){var a=j();return Object(u.jsx)("div",{className:a.root,children:Object(u.jsx)(r.a,{position:"static",children:Object(u.jsxs)(c.a,{children:[Object(u.jsx)(s.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",children:Object(u.jsx)(l.a,{onClick:function(){return e.history.goBack()}})}),Object(u.jsx)(i.a,{variant:"h6",className:a.title,children:e.name})]})})})}},360:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(3),r=t(5),c=t(0),i=t(4),s=t(378),o=t(205),l=t(305),u=t(371),j=t(46),d=t(208),m=t(132),b=t.n(m),p=t(349),h=t(113),x=t(304),O=t(8),g=t.n(O),f=t(9),v=t(156),y=t(126),C=(t(125),t(2));y.a.configure();var w=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function N(e){var a=w(),t=Object(c.useState)(""),m=Object(r.a)(t,2),h=m[0],O=m[1],N=Object(c.useState)(""),k=Object(r.a)(N,2),G=k[0],W=k[1],B=Object(i.b)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(v.a,Object(n.a)({name:""},e)),Object(C.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(l.a,{}),Object(C.jsxs)("div",{className:a.paper,children:[Object(C.jsx)(s.a,{className:a.avatar,children:Object(C.jsx)(b.a,{})}),Object(C.jsx)(p.a,{component:"h1",variant:"h5",children:"Create Group"}),Object(C.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(C.jsxs)(d.a,{container:!0,spacing:2,children:[Object(C.jsx)(d.a,{item:!0,xs:12,children:Object(C.jsx)(u.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Group Name",name:"email",value:h,onChange:function(e){return O(e.target.value)},autoComplete:"email",autoFocus:!0})}),Object(C.jsx)(d.a,{item:!0,xs:12,children:Object(C.jsx)(u.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:G,onChange:function(e){return W(e.target.value)},autoComplete:"current-password"})})]}),Object(C.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){a.preventDefault();var t=localStorage.getItem("token"),n=g.a.create({baseURL:f.a,headers:{Authorization:"bearer ".concat(t)}}),r={name:h,pass:G};n.post("newroom",r).then((function(a){var t=a.data;1==t.status?(y.a.success(t.msg,{autoClose:1e3}),B({type:"add_my_group",payload:h}),e.history.push("/")):y.a.error(t.msg,{autoClose:1e3})})).catch((function(a){y.a.error(a,{autoClose:1e3}),e.history.push("/signin")}))},children:"Create"}),Object(C.jsx)(d.a,{container:!0,children:Object(C.jsx)(d.a,{item:!0,xs:!0,children:Object(C.jsx)(j.b,{to:"/enterroom",variant:"body2",children:"Enter Already Existing Group"})})})]})]})]})]})}}}]);
//# sourceMappingURL=21.8c042d6f.chunk.js.map