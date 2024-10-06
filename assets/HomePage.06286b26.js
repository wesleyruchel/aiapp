import{W as N,r as d,o as D,k as p,l as h,m as t,n as r,f as e,Q as i,U as I,aF as P,F as $,t as g,af as B,V as E,p as H,q as T}from"./index.b90dc419.js";import{Q as F}from"./QSeparator.98df0158.js";import{Q as b,a as f}from"./QCard.8ff134fc.js";import{Q as U}from"./QSpace.038583b9.js";import{Q as L}from"./QInput.f9cb256d.js";import{Q as M}from"./QDialog.6a84ced5.js";import{Q as j}from"./QCardActions.50cdb273.js";import{Q as z}from"./QPage.b0102dd6.js";import{C as R}from"./ClosePopup.f1231dba.js";import{a as W,s as G}from"./userService.27131ca3.js";import{H as C}from"./loaderUtils.7b0c0db7.js";import{u as J}from"./notificationUtils.eeb71a00.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.60659529.js";import"./focus-manager.40072c15.js";import"./private.use-form.b3e06a09.js";import"./use-timeout.f6efbb15.js";import"./focusout.d0634f6a.js";const y=n=>(H("data-v-58da97ec"),n=n(),T(),n),O={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},X=y(()=>r("div",{class:"text-h5"},"Meus \xE1lbums",-1)),Y={class:"q-mx-md"},Z={class:"text-h6"},oo={class:"text-subtitle1 q-mb-sm"},eo=y(()=>r("div",{class:"text-h6"},"Pronto! Compartilhe o c\xF3digo abaixo.",-1)),ao={__name:"HomePage",setup(n){const m=N(),{showSuccessNotification:Q,showErrorNotification:_}=J(),v=d({}),c=d(""),q=d(!1),u=d(!1);D(()=>{x()});const x=async()=>{try{C.show("Aguarde... Estamos carregando seus \xE1lbuns...");const{items:a}=await W();v.value=a}catch(a){_(a.message)}finally{C.hide()}},w=()=>{m.push("corrigir")},k=()=>{m.push("album/")},S=a=>{m.push(`album/${a}`)},V=async a=>{try{const o=await G(a);o&&(u.value=!0,c.value=o.data.shareCode,q.value=!0)}catch{}},A=a=>{navigator.clipboard.writeText(a).then(()=>{Q("C\xF3digo de compartilhamento copiado para a \xE1rea de transfer\xEAncia :)")}).catch(o=>{_("Desculpe, n\xE3o foi poss\xEDvel copiar o c\xF3digo de compartilhamento para a \xE1rea de transfer\xEAncia :(")})};return(a,o)=>(p(),h(z,{class:"q-pa-lg"},{default:t(()=>[r("div",O,[X,r("div",null,[e(i,{rounded:"",label:"Corrigir",color:"primary",class:"q-ml-sm q-mt-sm button",icon:"rule",onClick:o[0]||(o[0]=s=>w())}),e(i,{rounded:"",label:"Novo",color:"primary",class:"q-ml-sm q-mt-sm button",icon:"add_circle",onClick:o[1]||(o[1]=s=>k())})])]),e(F,{class:"q-my-md q-mx-md"}),r("div",Y,[(p(!0),I($,null,P(v.value,s=>(p(),h(b,{key:s.id,class:"q-mb-md rounded-card",flat:"",bordered:""},{default:t(()=>[e(f,null,{default:t(()=>[r("div",Z,g(s.title),1),r("div",oo,g(s.description),1)]),_:2},1024),e(j,{align:"right"},{default:t(()=>[e(i,{icon:"edit",label:"Editar",color:"primary",flat:"",onClick:l=>S(s.id)},null,8,["onClick"]),e(i,{icon:"share",label:"Compartilhar",color:"primary",flat:"",onClick:l=>V(s.id)},null,8,["onClick"]),e(M,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=l=>u.value=l)},{default:t(()=>[e(b,null,{default:t(()=>[e(f,{class:"row items-center q-pb-none"},{default:t(()=>[eo,e(U),B(e(i,{icon:"close",flat:"",round:""},null,512),[[R]])]),_:1}),e(f,null,{default:t(()=>[e(L,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=l=>c.value=l),class:"q-mb-md",style:{"font-size":"25px"},square:"",outlined:"",readonly:""},{append:t(()=>[e(E,{name:"content_copy",class:"cursor-pointer",onClick:o[2]||(o[2]=l=>A(c.value))})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1024)]),_:2},1024))),128))])]),_:1}))}};var Qo=K(ao,[["__scopeId","data-v-58da97ec"]]);export{Qo as default};
