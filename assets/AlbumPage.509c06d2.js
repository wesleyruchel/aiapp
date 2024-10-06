import{r as l,o as X,w as ie,k as c,l as g,m as s,f as a,U as A,n,Q as v,aK as _,af as Y,H as ne,aJ as ce,W as ue,F as W,t as F,aF as de,V as $,R as me,p as pe,q as ve}from"./index.f6f9de23.js";import{Q as fe}from"./QSeparator.cc1e6d75.js";import{a as D,Q as E}from"./QCard.8843ea6f.js";import{Q as J}from"./QImg.719203e1.js";import{Q as he}from"./QPage.db8cf4c8.js";import{Q as Z}from"./QCardActions.91730c4a.js";import{Q as L}from"./QDialog.7ed19c9a.js";import{C as ee}from"./ClosePopup.5f5aaad3.js";import{a as ge}from"./albumsService.177a21b2.js";import{c as _e,p as K}from"./userService.c104b95c.js";import{g as ye}from"./routeHelpers.b0f727b5.js";import{H as q}from"./loaderUtils.3d9d025b.js";import{u as ae}from"./notificationUtils.9118f924.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.101dc898.js";import"./use-timeout.217898b4.js";import"./focusout.2ff2abc3.js";import"./focus-manager.40072c15.js";const Ce={key:0,class:"video-container"},ke={key:1,class:"q-mt-md"},we=["src"],be={__name:"CameraModal",props:{isOpen:Boolean},emits:["photo-captured","close"],setup(k,{emit:U}){const{showErrorNotification:M}=ae(),Q=k,y=U,C=l(Q.isOpen),O=l(!1),w=l(!1),i=l(null),d=l(null),r=l(!1),m=l(null),b=l(null),x=l("environment");X(()=>{navigator.mediaDevices.getUserMedia&&(O.value=!0)});const V=async()=>{try{const u=await navigator.mediaDevices.getUserMedia({video:{facingMode:x.value}});await ne(),b.value&&(w.value=!0,b.value.srcObject=u,d.value=u.getVideoTracks()[0],i.value=new ImageCapture(d.value))}catch{M("Desculpe, ocorreu um erro ao acessar a cam\xEAra do dispositivo. Por favor, tente novamente em outro navegador.")}},N=()=>{i.value&&i.value.takePhoto().then(u=>{const f=new FileReader;f.readAsDataURL(u),f.onloadend=()=>{m.value=f.result,r.value=!0,S()}}).catch(u=>{M("Desculpe, um erro ocorreu")})},S=()=>{d.value&&d.value.stop()},R=()=>{y("close"),S(),C.value=!1,r.value=!1,m.value=null},P=()=>{r.value=!1,m.value=null,V()},H=()=>{y("photo-captured",m.value),C.value=!1,r.value=!1,m.value=null},j=()=>{x.value=x.value==="user"?"environment":"user",S(),V()};return ie(()=>Q.isOpen,u=>{C.value=u,u&&V()}),(u,f)=>(c(),g(L,{modelValue:C.value,"onUpdate:modelValue":f[0]||(f[0]=z=>C.value=z),persistent:""},{default:s(()=>[a(E,{class:"q-pa-md",style:{"max-width":"90vw","max-height":"90vh"}},{default:s(()=>[a(D,{class:"text-center"},{default:s(()=>[r.value?(c(),A("div",ke,[n("img",{src:m.value,alt:"Foto Capturada",class:"captured-image"},null,8,we)])):(c(),A("div",Ce,[n("video",{ref_key:"videoplayRef",ref:b,autoplay:"",playsinline:"",class:"video"},null,512)]))]),_:1}),a(Z,{align:"center",class:"q-pt-none"},{default:s(()=>[r.value?(c(),g(v,{key:0,color:"primary",icon:"publish",label:"Pronto",onClick:H,class:"full-width"})):_("",!0),r.value?(c(),g(v,{key:1,color:"primary",icon:"replay",label:"Tentar Novamente",onClick:P,class:"full-width q-mt-sm"})):_("",!0),r.value?_("",!0):(c(),g(v,{key:2,color:"primary",icon:"photo_camera",label:"Tirar Foto",onClick:N,disable:!w.value,class:"full-width"},null,8,["disable"])),r.value?_("",!0):(c(),g(v,{key:3,color:"primary",icon:"change_circle",label:x.value==="environment"?"C\xE2mera frontal":"C\xE2mera traseira",onClick:j,class:"full-width q-mt-sm"},null,8,["label"])),Y(a(v,{icon:"close",label:"Cancelar",color:"primary",onClick:R,class:"full-width q-mt-sm"},null,512),[[ee]])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};var xe=te(be,[["__scopeId","data-v-72d28cdb"]]);const Se=k=>(pe("data-v-10629a90"),k=k(),ve(),k),Ie={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},qe={class:"text-h5"},De=Se(()=>n("div",{class:"row q-mt-md q-mb-md q-mx-md text-caption"}," * Ao colar uma figurinha automaticamente ela ser\xE1 encaminhada para a corre\xE7\xE3o. A indica\xE7\xE3o no topo direito da figurinha indicar\xE1 se ela est\xE1 correta ou n\xE3o. N\xE3o havendo indica\xE7\xE3o, a figurinha ainda n\xE3o foi colada ou corrigida. ",-1)),Ae={class:"row q-gutter-md section-card",flat:"",bordered:""},Qe={class:"text-h5 q-mt-sm q-mb-xs"},Ve={class:"text-caption"},Ne={key:0},Pe={class:"q-pa-md flex flex-center full-width full-height"},Fe={key:0,class:"q-pa-md flex flex-center full-width full-height"},Ue={class:"row q-gutter-sm"},Me={class:"text-h6"},G=30,Re={__name:"AlbumPage",setup(k){const U=ce(),M=ue(),{showSuccessNotification:Q,showErrorNotification:y}=ae(),C=l(U.params.id||null),O=l(U.params.name||""),w=l({}),i=l({id:0}),d=l({}),r=l({}),m=l(!1),b=l(!1);X(()=>{V(C.value)});const x=()=>{M.push(ye("inicio"))},V=async o=>{try{q.show("Aguarde... Carregando...");const{stickers:t}=await ge(o);if(t){w.value=t;const e=await _e(o);e&&w.value.forEach(p=>{var h=e.data.find(I=>I.stickerId===p.id);h&&(r.value[p.id]=h.imageUrl),h=e.data.find(I=>I.stickerId===p.id),h&&(d.value[p.id]=h.status)})}}catch(t){y(t.message)}finally{q.hide()}},N=l(!1),S=l(""),R=l(""),P=o=>o.length>G,H=o=>P(o)?o.substring(0,G):o,j=(o,t)=>{S.value=o,R.value=t,N.value=!0},u=l(null),f=async o=>{i.value.id=o,u.value.click()},z=o=>{try{const t=o.target.files[0];if(t){const e=new FileReader;e.onload=async p=>{const h=new String(p.target.result).split(",")[1];try{i.value.id>0&&h.length>0&&(q.show("Aguarde... estamos colando a figurinha para voc\xEA..."),await K({imageBase64:h,stickerId:i.value.id})&&(r.value[i.value.id]=p.target.result,d.value[i.value.id]=null,Q("Uhul! Nova figurinha adicionada!")))}catch(I){y(I.message)}finally{q.hide()}},e.readAsDataURL(t)}}catch(t){y(t.message)}finally{}},B=l(!1),T=l(null),le=async o=>{B.value=!0,T.value=null,i.value.id=o},oe=async o=>{T.value=o,B.value=!1;try{const t=new String(T.value).split(",")[1];i.value.id>0&&t.length>0&&(q.show("Aguarde... estamos colando a figurinha para voc\xEA..."),await K({imageBase64:t,stickerId:i.value.id})&&(r.value[i.value.id]=o,d.value[i.value.id]=null,Q("Uhul! Nova figurinha adicionada!"),T.value=null))}catch(t){y(t.message)}finally{q.hide()}},se=()=>{B.value=!1},re=o=>{b.value=o,m.value=!0};return(o,t)=>(c(),A(W,null,[a(he,{class:"q-pa-lg"},{default:s(()=>[n("div",Ie,[n("div",qe,F(O.value),1),n("div",null,[a(v,{rounded:"",color:"primary",class:"button",icon:"home",label:"In\xEDcio",onClick:x})])]),a(fe,{class:"q-my-md q-mx-md"}),De,n("div",Ae,[(c(!0),A(W,null,de(w.value,e=>(c(),g(E,{key:e.id,class:"col-12 col-md-2 rounded-card",flat:"",bordered:""},{default:s(()=>[d.value[e.id]?(c(),g($,{key:0,name:d.value[e.id]==="Aprovada"?"check_circle":"cancel",class:"absolute-top-right q-pa-md",color:d.value[e.id]==="Aprovada"?"green":"red",size:"25px"},null,8,["name","color"])):_("",!0),a(D,null,{default:s(()=>[n("div",Qe,F(e.title),1),n("div",Ve,[me(F(H(e.description))+" ",1),P(e.description)?(c(),A("span",Ne,"...")):_("",!0),P(e.description)?(c(),g(v,{key:1,flat:"",dense:"",color:"primary",class:"text-caption",label:"Ver mais",onClick:p=>j(e.description,e.title)},null,8,["onClick"])):_("",!0)])]),_:2},1024),a(D,{style:{height:"380px",display:"flex","align-items":"center","justify-content":"center"}},{default:s(()=>[a(J,{src:r.value[e.id],style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},onClick:p=>re(r.value[e.id])},{error:s(()=>[n("div",Pe,[a($,{name:"warning",size:"64px",color:"grey-4"})])]),default:s(()=>[r.value[e.id]?_("",!0):(c(),A("div",Fe,[a($,{name:"add_photo_alternate",size:"64px",color:"grey-4"})]))]),_:2},1032,["src","onClick"])]),_:2},1024),a(D,null,{default:s(()=>[n("div",Ue,[a(v,{class:"col",rounded:"",color:"primary",label:"Carregar",icon:"upload",onClick:p=>f(e.id)},null,8,["onClick"]),a(v,{class:"col",rounded:"",color:"primary",label:"Capturar",icon:"camera_alt",onClick:p=>le(e.id)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))])]),_:1}),a(L,{modelValue:N.value,"onUpdate:modelValue":t[0]||(t[0]=e=>N.value=e),persistent:""},{default:s(()=>[a(E,null,{default:s(()=>[a(D,null,{default:s(()=>[n("div",Me,F(R.value),1)]),_:1}),a(D,null,{default:s(()=>[n("div",null,F(S.value),1)]),_:1}),a(Z,{align:"right"},{default:s(()=>[Y(a(v,{flat:"",label:"Fechar",color:"primary"},null,512),[[ee]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(xe,{isOpen:B.value,onPhotoCaptured:oe,onClose:se},null,8,["isOpen"]),n("input",{type:"file",ref_key:"fileInput",ref:u,onChange:z,accept:"image/*",style:{display:"none"}},null,544),a(L,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e)},{default:s(()=>[a(J,{src:b.value,style:{width:"100%",height:"auto"}},null,8,["src"]),a($,{name:"close",size:"md",color:"white",class:"dialog-close-icon",onClick:t[1]||(t[1]=e=>m.value=!1)})]),_:1},8,["modelValue"])],64))}};var ta=te(Re,[["__scopeId","data-v-10629a90"]]);export{ta as default};
