"use strict";(self.webpackChunkgullak_shg=self.webpackChunkgullak_shg||[]).push([[672],{83672:(e,n,r)=>{r.r(n),r.d(n,{default:()=>$});var t,a,i,o=r(75977),l=r(65043),s=r(43778),d=r(90385),c=r(35077),p=r(58422),u=r(30342),m=r(33155),h=r(15298),g=r(57528),f=r(72119),x=r(74068),v=r.n(x),b=r(25869);const j=f.Ay.div(t||(t=(0,g.A)(["\n  position: relative;\n  border-radius: 50%;\n  aspect-ratio: 1 / 1;\n  width: 120px;\n  margin: 0 auto 16px;\n  background-color: ",";\n  ",";\n  ",";\n  font-size: ",";\n  cursor: pointer;\n  border: 2px dashed transparent;\n  transition: border-color var(--transition);\n\n  .icon {\n    opacity: 0.5;\n  }\n\n  &:hover, &:focus, &.active {\n    border-color: ",";\n  }\n\n  .hint {\n    display: none;\n  }\n"])),v()("theme",{light:b.BB.highlight,dark:b.XT.highlight}),b.Uu.col,b.Uu.center,b.yM[18],v()("theme",{light:b.Tj.light_gray,dark:b.Tj.dark})),y=f.Ay.div(a||(a=(0,g.A)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"])));f.Ay.button(i||(i=(0,g.A)(["\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 50%;\n  padding: 8px 8px;\n  z-index: 10;\n  cursor: pointer;\n  font-size: ",";\n  transition: background-color var(--transition);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),v()("theme",{light:b.Tj.light_gray,dark:b.Tj.dark}),b.yM[14],v()("theme",{light:b.Tj.blue,dark:b.Tj.blue}));var A=r(28942),_=r(70579);const w={"image/jpeg":[],"image/png":[],"image/gif":[],"image/bmp":[],"image/webp":[],"image/svg+xml":[]},N={"application/pdf":[],"application/msword":[],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[],"application/vnd.ms-excel":[],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[]},k=e=>{let{type:n,multiple:r,children:t,avatarUrl:a,userId:i}=e;const[o,s]=(0,l.useState)(a),{notify:d}=(0,h.A)("File has been successfully uploaded.","success"),{getRootProps:c,getInputProps:p,isDragActive:u}=(0,m.VB)({accept:"image"===n?{...w}:{...N},multiple:r,onDrop:async e=>{const n=e[0];if(n){const e=n.name.split(".").pop(),r="".concat(Math.random(),".").concat(e),t="".concat(i,"/").concat(r);console.log("filepath",t);const{data:a,error:o}=await A.A.storage.from("avatars").upload(t,n,{upsert:!0,cacheControl:"3600"});if(o)return void console.error("Error uploading file:",o);(async e=>{const{data:n,error:r}=A.A.storage.from("avatars").getPublicUrl(e);r?console.error("Error getting public URL:",r):(console.log("data",n),console.log("data.publicUrl",n.publicUrl),s(n.publicUrl))})(t),d()}}});return(0,_.jsx)("div",{children:(0,_.jsxs)(j,{...c(),className:u?"dropzone active":"dropzone",children:[(0,_.jsx)("input",{...p()}),o?(0,_.jsx)(y,{children:(0,_.jsx)("img",{src:o,alt:"Preview"})}):t]})})},U=e=>{let{avatarUrl:n,userId:r}=e;const t="Drag image here or click to select file";return(0,_.jsxs)(k,{multiple:!1,type:"image",avatarUrl:n,userId:r,children:[(0,_.jsx)("i",{className:"icon icon-image","aria-label":t}),(0,_.jsx)("span",{className:"hint",children:t})]})};var q=r(97424),B=r(63516),Y=r(59897),I=r(80899),P=r(39335);const T=I.Ik().shape({firstName:I.Yj().required("First name is required"),lastName:I.Yj().required("Last name is required"),dateOfBirth:I.Yj().notRequired(),phoneNumber:I.Yj().matches(P.x2,"Phone number is not valid").notRequired(),email:I.Yj().email("Invalid email format").required("Email is required"),address:I.Yj().notRequired()});var z,S,E,F,V,D,R;const L=f.Ay.div(z||(z=(0,g.A)(["\n  ","\n  gap: 16px;\n  width: 100%; \n"])),b.Uu.col),M=f.Ay.div(S||(S=(0,g.A)(["\n  ","\n  gap: 10px;\n\n  & > * {\n    width: 100%;\n  }\n\n  "," {\n    gap: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .button {\n    max-width: 480px;\n    align-self: center;\n  }\n"])),b.Uu.col,b.fi.tablet);f.Ay.div(E||(E=(0,g.A)(["\n  display: flex;\n  flex-direction: row;\n  padding-top: 16px;\n  align-items: center;\n"]))),f.Ay.div(F||(F=(0,g.A)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n"]))),f.Ay.div(V||(V=(0,g.A)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  margin: 10px 0;\n  &::before, &::after {\n    content: '';\n    flex: 1;\n    border-bottom: 2px dotted lightgray;\n  }\n  &:not(:empty)::before {\n    margin-right: 0.25em;\n  }\n  &:not(:empty)::after {\n    margin-left: 0.25em;\n  }\n"]))),f.Ay.span(D||(D=(0,g.A)(["\n  font-size: ",";\n  width: fit-content;\n  color: ",";\n"])),b.yM[14],b.Tj.error),f.Ay.a(R||(R=(0,g.A)(["\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  &:hover {\n    color: ",";\n    text-decoration: underline;\n  }\n"])),b.Tj.primary);var C=r(79456),J=r(63999);const O=e=>{let{initialValues:n,userId:r}=e;const t=(0,C.wA)(),{notify:a}=(0,h.A)();return(0,_.jsx)(B.l1,{initialValues:n,validationSchema:T,onSubmit:async(e,n)=>{let{setSubmitting:a}=n;a(!0),console.log("values",e);const i={full_name:"".concat(e.firstName," ").concat(e.lastName),date_of_birth:e.date_of_birth,phone_number:e.phone_number,email:e.email,address:e.address};t((0,J.eg)({updatedProfile:i,userId:r})),a(!1)},children:e=>{let{values:n,setFieldValue:r}=e;return(0,_.jsx)(B.lV,{children:(0,_.jsxs)(L,{children:[(0,_.jsx)(Y.BY,{name:"firstName",label:"First Name",placeholder:"First Name",required:!0}),(0,_.jsx)(Y.BY,{name:"lastName",label:"Last Name",placeholder:"Last Name",required:!0}),(0,_.jsx)(Y.PJ,{name:"date_of_birth",label:"Date of Birth",placeholder:"Date of Birth"}),(0,_.jsx)(Y.BY,{name:"phone_number",label:"Phone Number",placeholder:"Phone",required:!0}),(0,_.jsx)(Y.BY,{name:"email",label:"Email",placeholder:"Email",required:!0}),(0,_.jsx)(Y.BY,{name:"address",label:"Address",placeholder:"Address",asType:"textarea"}),(0,_.jsx)(M,{className:"button",children:(0,_.jsx)(q.A,{text:"Save",handler:()=>{a("Profile Updated")},type:"submit"})})]})})}})},X=()=>{const{user_id:e}=(0,u.A)(),n=(0,C.wA)(),r=(0,C.d4)(J.og),t=(0,C.d4)(J.Nz);(0,l.useEffect)((()=>{n((0,J.l2)(e))}),[n]);const a={firstName:null===r||void 0===r?void 0:r.full_name.split(" ")[0],lastName:null===r||void 0===r?void 0:r.full_name.split(" ")[1],date_of_birth:null===r||void 0===r?void 0:r.date_of_birth,phone_number:null===r||void 0===r?void 0:r.phone_number,email:null===r||void 0===r?void 0:r.email,address:null===r||void 0===r?void 0:r.address},i=null===r||void 0===r?void 0:r.avatar_url;return(0,_.jsxs)(s.A,{name:"UserSettings",children:[(0,_.jsx)(p.A,{title:"Settings"}),(0,_.jsx)(d.A,{children:t?(0,_.jsx)(c.A,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(U,{avatarUrl:i,userId:e}),(0,_.jsx)(O,{initialValues:a,userId:e})]})})]})},$=()=>(0,_.jsx)(o.A,{children:(0,_.jsx)("div",{children:(0,_.jsx)(X,{})},"edit_profile")})},39335:(e,n,r)=>{r.d(n,{x2:()=>t});const t=/^\d{10}$/}}]);
//# sourceMappingURL=672.4f07e6d9.chunk.js.map