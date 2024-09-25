import{Q as _}from"./QInput.6bfa0164.js";import{r as c,w as V,k as v,R as w,f as e,m as o,S as y,U as Q,V as b,P as g,l as h,W as q,n as m,Q as x,X as k,O as f}from"./index.129f0960.js";import{Q as S}from"./QForm.1b075613.js";import{a as C,Q as N}from"./QCard.e906fb3c.js";import{Q as B}from"./QPage.9c84b3ad.js";import{u as P}from"./notificationUtils.f93b8597.js";import{g as j}from"./routeHelpers.90713f5e.js";import"./use-dark.ab9d8e94.js";import"./focus-manager.40072c15.js";const U={__name:"PasswordInput",props:{modelValue:Object},emits:["update:modelValue"],setup(p,{emit:u}){const l=p,d=u,a=c(l.modelValue.password),t=c(!0);return V(a,r=>{d("update:modelValue",{...l.modelValue,password:r})}),(r,s)=>(v(),w("div",null,[e(_,{required:"",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),label:"Senha",type:t.value?"password":"text",rounded:"",outlined:"",class:"q-mb-md"},{append:o(()=>[e(y,{name:t.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[0]||(s[0]=n=>t.value=!t.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]))}},E={class:"row justify-center"},I={class:"row justify-center"},R={class:"row justify-center"},X={__name:"LoginPage",setup(p){const u=Q(),l=b(),{showErrorNotification:d}=P(),a=c({username:"",password:""}),t=async()=>{try{await l.login(a.value)&&u.push(j("inicio"))}catch(r){d(r.message)}};return(r,s)=>{const n=g("router-link");return v(),h(B,{class:"padding"},{default:o(()=>[e(N,{class:"q-pa-md"},{default:o(()=>[e(C,null,{default:o(()=>[e(S,{onSubmit:q(t,["prevent","stop"])},{default:o(()=>[e(_,{required:"",modelValue:a.value.username,"onUpdate:modelValue":s[0]||(s[0]=i=>a.value.username=i),label:"Nome de usu\xE1rio",rounded:"",outlined:"",class:"q-mb-md"},null,8,["modelValue"]),e(U,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=i=>a.value=i)},null,8,["modelValue"]),m("div",E,[e(x,{label:"Acessar",type:"submit",color:"primary",rounded:"",loading:k(l).loading},null,8,["loading"])]),m("div",I,[e(n,{to:"/esqueceu-a-senha",class:"text-primary q-mt-md"},{default:o(()=>[f("Esqueceu a senha?")]),_:1})]),m("div",R,[e(n,{to:"/cadastro",class:"text-primary q-mt-md"},{default:o(()=>[f("Cadastre-se")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{X as default};
