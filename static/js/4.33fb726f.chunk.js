(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{330:function(t,e,n){t.exports={formControl:"formsControls_formControl__2lDIg",error:"formsControls_error__1xuuN",formSummaryError:"formsControls_formSummaryError__2FIvy"}},331:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return b}));var s=n(9),r=n(128),o=n(3),c=n(330),i=n.n(c),a=n(195),u=(n(0),function(t){t.input;var e=t.meta,n=e.touched,s=e.error,r=t.children,c=n&&s;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:r}),c&&Object(o.jsx)("span",{children:s})]})}),l=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(o.jsxs)(u,Object(s.a)(Object(s.a)({},t),{},{children:[" ",Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},e),n))," "]}))},j=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},e),n))}))},b=function(t,e,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(a.a,Object(s.a)({placeholder:t,name:e,validate:n,component:r},c))," ",i]})}},333:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var s=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},340:function(t,e,n){t.exports={contentImg:"profileInfo_contentImg__12i0o",descriptionBlock:"profileInfo_descriptionBlock__3waKZ",mainPhoto:"profileInfo_mainPhoto__ym15R",contact:"profileInfo_contact__2Z8Ug",jobSearchIcon:"profileInfo_jobSearchIcon__2Eqq5"}},393:function(t,e,n){t.exports={postBlock:"MyPosts_postBlock__2vZBV",posts:"MyPosts_posts__1WNay"}},394:function(t,e,n){t.exports={item:"Post_item__cxCRM"}},397:function(t,e,n){"use strict";n.r(e);var s=n(9),r=n(3),o=n(53),c=n(54),i=n(56),a=n(55),u=n(0),l=n.n(u);var j=n(135);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(s=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);s=!0);}catch(a){r=!0,o=a}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return n}}(t,e)||Object(j.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(340),f=n.n(d),h=n(103),p=function(t){var e=b(Object(u.useState)(!1),2),n=e[0],s=e[1],o=b(Object(u.useState)(t.status),2),c=o[0],i=o[1];Object(u.useEffect)((function(){i(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[!n&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Status : "}),"  ",Object(r.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"----------"})]}),n&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){i(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(c)},value:c})})]})},O=n(150),m=n(331),x=n(196),v=n(330),g=n.n(v),P=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,n=t.profile,s=t.error;return Object(r.jsxs)("form",{onSubmit:e,children:[Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("button",{children:"save"})," "]}),s&&Object(r.jsx)("div",{className:g.a.formSummaryError,children:s}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Full name "}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Looking for a job "})," : ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" My profiessional skills :"}),Object(m.c)("My profiessional skills","lookingForAJobDescription",[],m.b)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" About me :"}),Object(m.c)("About me","aboutMe",[],m.b)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Contacts :"})," ",Object.keys(n.contacts).map((function(t){return Object(r.jsx)("div",{className:f.a.contact,children:Object(r.jsxs)("b",{children:[t," ",Object(m.c)(t,"contacts."+t,[],m.a)," "]})},t)}))]})]})})),y=function(t){var e=t.profile,n=t.isOwner,s=t.goToEditMode;return Object(r.jsxs)("div",{children:[n&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:s,children:"Edit"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Full name :"})," ",e.fullName]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Looking for a job :"})," ",e.lookingForAJob?Object(r.jsx)("img",{src:"http://www.animatedgif.net/sitemessages/search/w-search_ani_e0.gif",className:f.a.jobSearchIcon}):"no"]}),e.lookingForAJob&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" My profiessional skills :"})," ",e.lookingForAJobDescription]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" About me :"})," ",e.aboutMe]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:" Contacts :"})," ",Object.keys(e.contacts).map((function(t){return Object(r.jsx)(_,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},_=function(t){var e=t.contactTitle,n=t.contactValue;return Object(r.jsxs)("div",{className:f.a.contact,children:[Object(r.jsx)("b",{children:e}),": ",n," "]})},k=function(t){var e=t.profile,n=t.status,s=t.updateStatus,o=t.isOwner,c=t.savePhoto,i=t.saveProfile,a=b(Object(u.useState)(!1),2),l=a[0],j=a[1];if(!e)return Object(r.jsx)(h.a,{});return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:f.a.descriptionBlock,children:[Object(r.jsx)("img",{src:e.photos.large||O.a,className:f.a.mainPhoto}),o&&Object(r.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}),l?Object(r.jsx)(P,{initialValues:e,profile:e,onSubmit:function(t){i(t).then((function(){j(!1)}))}}):Object(r.jsx)(y,{goToEditMode:function(){j(!0)},profile:e,isOwner:o}),Object(r.jsx)(p,{status:n,updateStatus:s})]})})},S=n(129),I=n(393),w=n.n(I),A=n(394),C=n.n(A),M=function(t){return Object(r.jsxs)("div",{className:C.a.item,children:[Object(r.jsx)("img",{src:"https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"}),t.post,Object(r.jsxs)("p",{children:["like ",t.likesCount]})]})},N=n(195),F=n(333),T=Object(F.a)(10),E=l.a.memo((function(t){var e=t.posts.map((function(t){return Object(r.jsx)(M,{post:t.post,likesCount:t.likesCount},t.id)}));return Object(r.jsxs)("div",{className:w.a.postBlock,children:[Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:"My posts"})}),Object(r.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(r.jsx)("div",{className:w.a.posts,children:e})]})})),B=Object(x.a)({form:"ProfileAddPostReduxForm"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(N.a,{name:"newPostText",component:m.b,validate:[F.b,T],placeholder:"PostMessage"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add Post"})})]})})),J=E,D=n(50),U=Object(D.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(S.a)(e))}}}))(J),V=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveProfile:t.saveProfile}),Object(r.jsx)(U,{})]})},Z=n(20),q=n(44),R=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,n){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(r.jsx)(V,Object(s.a)(Object(s.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(l.a.Component);e.default=Object(q.d)(Object(D.b)((function(t){return{profile:t.profilePage.profile,userId:t.auth.userId,isAuth:t.auth.isAuth,status:t.profilePage.status}}),{getUserProfile:S.c,getUserStatus:S.d,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),Z.f)(R)}}]);
//# sourceMappingURL=4.33fb726f.chunk.js.map