import{U as A,r as m,o as S,k as n,l as g,m as o,n as r,f as e,Q as c,aL as I,aC as h,R as v,aB as B,F as N,S as y,aK as H,au as b,p as P,q as U}from"./index.a9ed6079.js";import{Q as x,a as u}from"./QCard.2002ab12.js";import{Q as $}from"./QInput.065a56f6.js";import{Q as D,C as Q}from"./ClosePopup.00ceaf92.js";import{Q as E}from"./QDialog.cc6cf142.js";import{Q as K}from"./QSeparator.465dd4a0.js";import{Q as L}from"./QImg.69108707.js";import{Q as z}from"./QPage.3b4fa906.js";import{a as F,b as M}from"./userService.ee4b5e86.js";import{H as w}from"./loaderUtils.cdf267dd.js";import{u as R}from"./notificationUtils.f44eb71d.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.8543b53f.js";import"./focus-manager.40072c15.js";import"./focusout.6376f03e.js";import"./use-timeout.ad445b78.js";const C=l=>(P("data-v-50bb77a2"),l=l(),U(),l),T={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},G=C(()=>r("div",{class:"text-h5"},"Meus \xE1lbums",-1)),J=C(()=>r("div",{class:"text-h6 text-primary"}," C\xF3digo do \xE1lbum compartilhado ",-1)),O={class:"row q-gutter-md section-card",flat:"",bordered:""},W={class:"q-pa-md flex flex-center full-width full-height"},X={key:0,class:"q-pa-md flex flex-center full-width full-height"},Y={class:"text-h5 q-mt-sm q-mb-xs"},Z={class:"text-subtitle1 q-mb-sm"},ee={__name:"HomePage",setup(l){const p=A(),{showErrorNotification:f}=R(),_=m({}),i=m(!1),d=m("");S(()=>{q()});const q=async()=>{try{w.show("Aguarde... Estamos carregando seus \xE1lbuns...");const{items:s}=await F();_.value=s}catch(s){f(s.message)}finally{w.hide()}},k=async()=>{try{await M(d.value)&&p.go()}catch(s){f(s.message)}},V=async(s,a)=>{p.push(`album/${s}/${a}`)};return(s,a)=>(n(),g(z,{class:"q-pa-lg"},{default:o(()=>[r("div",T,[G,r("div",null,[e(c,{rounded:"",label:"Novo",color:"primary",icon:"library_add",class:"button",onClick:a[0]||(a[0]=t=>i.value=!0)}),e(E,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=t=>i.value=t),persistent:""},{default:o(()=>[e(x,{style:{"min-width":"350px"}},{default:o(()=>[e(u,null,{default:o(()=>[J]),_:1}),e(u,{class:"q-pt-none"},{default:o(()=>[e($,{dense:"",modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=t=>d.value=t),autofocus:"",onKeyup:a[2]||(a[2]=I(t=>i.value=!1,["enter"]))},null,8,["modelValue"])]),_:1}),e(D,{align:"right",class:"text-primary"},{default:o(()=>[h(e(c,{flat:"",label:"Cancelar"},null,512),[[Q]]),h(e(c,{flat:"",label:"Adicionar \xE1lbum!",onClick:k},null,512),[[Q]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),e(K,{class:"q-my-md q-mx-md"}),r("div",O,[(n(!0),v(N,null,B(_.value,t=>(n(),g(x,{key:t.id,class:"col-12 col-md-2 rounded-card",flat:"",bordered:"",onClick:te=>V(t.id,t.title)},{default:o(()=>[e(L,{src:t.imageUrl},{error:o(()=>[r("div",W,[e(y,{name:"warning",size:"64px",color:"grey-4"})])]),default:o(()=>[t.imageUrl?H("",!0):(n(),v("div",X,[e(y,{name:"no_photography",size:"64px",color:"grey-4"})]))]),_:2},1032,["src"]),e(u,null,{default:o(()=>[r("div",Y,b(t.title),1),r("div",Z,b(t.description),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]),_:1}))}};var ve=j(ee,[["__scopeId","data-v-50bb77a2"]]);export{ve as default};
