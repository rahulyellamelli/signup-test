(this["webpackJsonpsignup-test"]=this["webpackJsonpsignup-test"]||[]).push([[0],{12:function(e,s,a){},14:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a.n(r),n=a(7),c=a.n(n),i=(a(12),a(2));a(5);function l(e){var s={};return e.username.trim()||(s.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email required",e.password?e.password.length<6&&(s.password="Password needs to be 6 characters or more"):s.password="Password is required",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Password is required",s}var o=a(3),m=a(6),d=function(e,s){var a=Object(r.useState)({username:"",email:"",password:"",password2:""}),t=Object(i.a)(a,2),n=t[0],c=t[1],l=Object(r.useState)({}),d=Object(i.a)(l,2),j=d[0],u=d[1],b=Object(r.useState)(!1),p=Object(i.a)(b,2),h=p[0],O=p[1];return Object(r.useEffect)((function(){0===Object.keys(j).length&&h&&e()}),[j]),{handleChange:function(e){var s=e.target,a=s.name,r=s.value;c(Object(m.a)(Object(m.a)({},n),{},Object(o.a)({},a,r)))},handleSubmit:function(e){e.preventDefault(),u(s(n)),O(!0)},values:n,errors:j}},j=a(0),u=function(e){var s=e.submitForm,a=d(s,l),r=a.handleChange,t=a.handleSubmit,n=a.values,c=a.errors;return Object(j.jsx)("div",{className:"form-content-right",children:Object(j.jsxs)("form",{onSubmit:t,className:"form",noValidate:!0,children:[Object(j.jsx)("h1",{children:"Signup Here"}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{className:"form-label",children:"Username"}),Object(j.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your username",value:n.username,onChange:r}),c.username&&Object(j.jsx)("p",{children:c.username})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{className:"form-label",children:"Email"}),Object(j.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:n.email,onChange:r}),c.email&&Object(j.jsx)("p",{children:c.email})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{className:"form-label",children:"Password"}),Object(j.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:n.password,onChange:r}),c.password&&Object(j.jsx)("p",{children:c.password})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{className:"form-label",children:"Confirm Password"}),Object(j.jsx)("input",{className:"form-input",type:"password",name:"password2",placeholder:"Confirm your password",value:n.password2,onChange:r}),c.password2&&Object(j.jsx)("p",{children:c.password2})]}),Object(j.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign up"}),Object(j.jsxs)("span",{className:"form-input-login",children:["Already have an account? Login ",Object(j.jsx)("a",{href:"#",children:"here"})]})]})})},b=function(){return Object(j.jsxs)("div",{className:"form-content-right",children:[Object(j.jsx)("h1",{className:"form-success",children:"We have received your request!"}),Object(j.jsx)("img",{className:"form-img-2",src:"img/img-3.svg",alt:"success-image"})]})},p=function(){var e=Object(r.useState)(!1),s=Object(i.a)(e,2),a=s[0],t=s[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("span",{className:"close-btn",children:"\xd7"}),Object(j.jsx)("div",{className:"form-content-left",children:Object(j.jsx)("img",{className:"form-img",src:"img/img-2.svg",alt:"spaceship"})}),a?Object(j.jsx)(b,{}):Object(j.jsx)(u,{submitForm:function(){t(!0)}})]})})};var h=function(){return Object(j.jsx)(p,{})};c.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},5:function(e,s,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.2810d464.chunk.js.map