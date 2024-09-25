import{t as E,c as k,h as j,B as K,U as M,r as _,o as O,k as d,R as y,f as e,m as a,F as D,n as s,Q as m,aB as z,au as i,aC as G,l as I,O as f,aK as A,S as C,p as J,q as W}from"./index.43ee95f8.js";import{Q as X}from"./QSeparator.9ab2110f.js";import{Q as B,a as p}from"./QCard.1fd63515.js";import{Q as Y}from"./QImg.5326b5ed.js";import{Q as Z,a as N,b as v}from"./QList.9600f249.js";import{Q as ee}from"./QPage.40f78098.js";import{Q as te,C as ae}from"./ClosePopup.077f089a.js";import{Q as oe}from"./QDialog.c23111c3.js";import{g as se,u as V}from"./userService.40a0eee1.js";import{g as le}from"./routeHelpers.83ef451f.js";import{H as T}from"./loaderUtils.7eff92e0.js";import{u as re}from"./notificationUtils.bfa0d048.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.d5070b26.js";import"./use-timeout.d95a2994.js";import"./focusout.8b4590d2.js";import"./focus-manager.40072c15.js";var w=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(l,{slots:h}){const n=k(()=>parseInt(l.lines,10)),b=k(()=>"q-item__label"+(l.overline===!0?" q-item__label--overline text-overline":"")+(l.caption===!0?" q-item__label--caption text-caption":"")+(l.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),c=k(()=>l.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>j("div",{style:c.value,class:b.value},K(h.default))}});const ne=l=>(J("data-v-1d816bbe"),l=l(),W(),l),ce={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},ue=ne(()=>s("div",{class:"text-h5"},"Corre\xE7\xF5es",-1)),de={class:"row q-gutter-md section-card",flat:"",bordered:""},me={class:"text-h5 q-mt-sm q-mb-xs"},pe={class:"text-h6 q-mt-sm q-mb-xs"},_e={class:"text-caption"},fe={key:0},ve={class:"q-pa-md flex flex-center full-width full-height"},he={class:"row q-gutter-sm"},be={class:"text-h6"},F=30,ge={__name:"StickerCorrectionPage",setup(l){const h=M(),{showSuccessNotification:n,showErrorNotification:b}=re(),c=_({});O(()=>{R()});const L=()=>{h.push(le("inicio"))},R=async()=>{try{T.show("Aguarde... Carregando...");const o=await se();o&&(c.value=o.data)}catch(o){b(o.message)}finally{T.hide()}},g=_(!1),Q=_(""),x=_(""),S=o=>o.length>F,P=o=>S(o)?o.substring(0,F):o,H=(o,r)=>{Q.value=o,x.value=r,g.value=!0},U=async(o,r)=>{const t="Aprovada";await V(o,t)&&(n("Voc\xEA aprovou a figurinha!"),c.value[r].status=t)},$=async(o,r)=>{const t="Reprovada";await V(o,t)&&(n("Voc\xEA reprovou a figurinha!"),c.value[r].status=t)};return(o,r)=>(d(),y(D,null,[e(ee,{class:"q-pa-lg"},{default:a(()=>[s("div",ce,[ue,s("div",null,[e(m,{rounded:"",color:"primary",class:"button",icon:"home",label:"In\xEDcio",onClick:L})])]),e(X,{class:"q-my-md q-mx-md"}),s("div",de,[(d(!0),y(D,null,z(c.value,(t,u)=>(d(),I(B,{key:u,class:"col-12 col-md-2 rounded-card",flat:"",bordered:""},{default:a(()=>[e(p,null,{default:a(()=>[s("div",me,i(t.albumTitle),1),s("div",pe,i(t.stickerTitle),1),s("div",_e,[f(i(P(t.stickerDescription))+" ",1),S(t.stickerDescription)?(d(),y("span",fe,"...")):A("",!0),S(t.stickerDescription)?(d(),I(m,{key:1,flat:"",dense:"",color:"primary",class:"text-caption",label:"Ver mais",onClick:q=>H(t.stickerDescription,t.stickerTitle)},null,8,["onClick"])):A("",!0)])]),_:2},1024),e(p,null,{default:a(()=>[e(Y,{src:t.imageUrl},{error:a(()=>[s("div",ve,[e(C,{name:"camera",color:"grey-4"})])]),_:2},1032,["src"])]),_:2},1024),e(Z,null,{default:a(()=>[e(N,null,{default:a(()=>[e(v,{avatar:""},{default:a(()=>[e(C,{color:"grey",name:"person"})]),_:1}),e(v,null,{default:a(()=>[e(w,{style:{"font-weight":"bold"}},{default:a(()=>[f(i(t.userFirstName),1)]),_:2},1024),e(w,{caption:""},{default:a(()=>[f("("+i(t.userName)+")",1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(N,null,{default:a(()=>[e(v,{avatar:""},{default:a(()=>[e(C,{color:"grey",name:"rule"})]),_:1}),e(v,null,{default:a(()=>[e(w,{style:{"font-weight":"bold"}},{default:a(()=>[f(i(t.status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(p,null,{default:a(()=>[s("div",he,[e(m,{class:"col",rounded:"",color:"primary",label:"Aprovar",icon:"check",disable:t.status==="Aprovada",onClick:q=>U(t.userStickerId,u)},null,8,["disable","onClick"]),e(m,{class:"col",rounded:"",color:"negative",label:"Reprovar",icon:"close",disable:t.status==="Reprovada",onClick:q=>$(t.userStickerId,u)},null,8,["disable","onClick"])])]),_:2},1024)]),_:2},1024))),128))])]),_:1}),e(oe,{modelValue:g.value,"onUpdate:modelValue":r[0]||(r[0]=t=>g.value=t),persistent:""},{default:a(()=>[e(B,null,{default:a(()=>[e(p,null,{default:a(()=>[s("div",be,i(x.value),1)]),_:1}),e(p,null,{default:a(()=>[s("div",null,i(Q.value),1)]),_:1}),e(te,{align:"right"},{default:a(()=>[G(e(m,{flat:"",label:"Fechar",color:"primary"},null,512),[[ae]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};var Re=ie(ge,[["__scopeId","data-v-1d816bbe"]]);export{Re as default};
