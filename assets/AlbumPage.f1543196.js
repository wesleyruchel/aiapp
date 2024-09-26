import{r as t,o as J,w as oe,l as n,m as g,n as s,f as a,R as Q,p as i,Q as p,aK as y,ae as K,H as le,aJ as se,U as re,F as L,ay as F,aF as ie,S as E,q as ne,t as ce,u as ue}from"./index.8ad7176f.js";import{Q as de}from"./QSeparator.ddcfa8c8.js";import{a as A,Q as H}from"./QCard.93c1c255.js";import{Q as me}from"./QImg.1d917fdb.js";import{Q as pe}from"./QPage.bbe672aa.js";import{Q as G,C as W}from"./ClosePopup.939b3330.js";import{Q as X}from"./QDialog.342388c1.js";import{a as ve}from"./albumsService.bfca893a.js";import{c as fe,p as z}from"./userService.9744e47e.js";import{g as he}from"./routeHelpers.33bdd260.js";import{H as D}from"./loaderUtils.b57ef548.js";import{u as Y}from"./notificationUtils.74098a83.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.186307de.js";import"./use-timeout.24e0f3c2.js";import"./focusout.a44336c0.js";import"./focus-manager.40072c15.js";const _e={key:0,class:"video-container"},ge={key:1,class:"q-mt-md"},ye=["src"],Ce={__name:"CameraModal",props:{isOpen:Boolean},emits:["photo-captured","close"],setup(b,{emit:V}){const{showErrorNotification:M}=Y(),N=b,C=V,k=t(N.isOpen),B=t(!1),x=t(!1),c=t(null),v=t(null),r=t(!1),f=t(null),P=t(null),h=t("environment");J(()=>{navigator.mediaDevices.getUserMedia&&(B.value=!0)});const S=async()=>{try{const u=await navigator.mediaDevices.getUserMedia({video:{facingMode:h.value}});await le(),P.value&&(x.value=!0,P.value.srcObject=u,v.value=u.getVideoTracks()[0],c.value=new ImageCapture(v.value))}catch{M("Desculpe, ocorreu um erro ao acessar a cam\xEAra do dispositivo. Por favor, tente novamente em outro navegador.")}},R=()=>{c.value&&c.value.takePhoto().then(u=>{const d=new FileReader;d.readAsDataURL(u),d.onloadend=()=>{f.value=d.result,r.value=!0,w()}}).catch(u=>{M("Desculpe, um erro ocorreu")})},w=()=>{v.value&&v.value.stop()},T=()=>{C("close"),w(),k.value=!1,r.value=!1,f.value=null},O=()=>{r.value=!1,f.value=null,S()},U=()=>{C("photo-captured",f.value),k.value=!1,r.value=!1,f.value=null},$=()=>{h.value=h.value==="user"?"environment":"user",w(),S()};return oe(()=>N.isOpen,u=>{k.value=u,u&&S()}),(u,d)=>(n(),g(X,{modelValue:k.value,"onUpdate:modelValue":d[0]||(d[0]=q=>k.value=q),persistent:""},{default:s(()=>[a(H,{class:"q-pa-md",style:{"max-width":"90vw","max-height":"90vh"}},{default:s(()=>[a(A,{class:"text-center"},{default:s(()=>[r.value?(n(),Q("div",ge,[i("img",{src:f.value,alt:"Foto Capturada",class:"captured-image"},null,8,ye)])):(n(),Q("div",_e,[i("video",{ref_key:"videoplayRef",ref:P,autoplay:"",playsinline:"",class:"video"},null,512)]))]),_:1}),a(G,{align:"center",class:"q-pt-none"},{default:s(()=>[r.value?(n(),g(p,{key:0,color:"primary",icon:"publish",label:"Pronto",onClick:U,class:"full-width"})):y("",!0),r.value?(n(),g(p,{key:1,color:"primary",icon:"replay",label:"Tentar Novamente",onClick:O,class:"full-width q-mt-sm"})):y("",!0),r.value?y("",!0):(n(),g(p,{key:2,color:"primary",icon:"photo_camera",label:"Tirar Foto",onClick:R,disable:!x.value,class:"full-width"},null,8,["disable"])),r.value?y("",!0):(n(),g(p,{key:3,color:"primary",icon:"change_circle",label:h.value==="environment"?"C\xE2mera frontal":"C\xE2mera traseira",onClick:$,class:"full-width q-mt-sm"},null,8,["label"])),K(a(p,{icon:"close",label:"Cancelar",color:"primary",onClick:T,class:"full-width q-mt-sm"},null,512),[[W]])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};var ke=Z(Ce,[["__scopeId","data-v-72d28cdb"]]);const we=b=>(ce("data-v-da3704ae"),b=b(),ue(),b),be={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},xe={class:"text-h5"},Se=we(()=>i("div",{class:"row q-mt-md q-mb-md q-mx-md text-caption"}," * Ao colar uma figurinha automaticamente ela ser\xE1 encaminhada para a corre\xE7\xE3o. A indica\xE7\xE3o no topo direito da figurinha indicar\xE1 se ela est\xE1 correta ou n\xE3o. N\xE3o havendo indica\xE7\xE3o, a figurinha ainda n\xE3o foi colada ou corrigida. ",-1)),qe={class:"row q-gutter-md section-card",flat:"",bordered:""},Ie={class:"text-h5 q-mt-sm q-mb-xs"},De={class:"text-caption"},Ae={key:0},Qe={class:"q-pa-md flex flex-center full-width full-height"},Ne={key:0,class:"q-pa-md flex flex-center full-width full-height"},Pe={class:"row q-gutter-sm"},Fe={class:"text-h6"},j=30,Ve={__name:"AlbumPage",setup(b){const V=se(),M=re(),{showSuccessNotification:N,showErrorNotification:C}=Y(),k=t(V.params.id||null),B=t(V.params.name||""),x=t({}),c=t({id:0}),v=t({}),r=t({});J(()=>{P(k.value)});const f=()=>{M.push(he("inicio"))},P=async o=>{try{D.show("Aguarde... Carregando...");const{stickers:l}=await ve(o);if(l){x.value=l;const e=await fe(o);e&&x.value.forEach(m=>{var _=e.data.find(I=>I.stickerId===m.id);_&&(r.value[m.id]=_.imageUrl),_=e.data.find(I=>I.stickerId===m.id),_&&(v.value[m.id]=_.status)})}}catch(l){C(l.message)}finally{D.hide()}},h=t(!1),S=t(""),R=t(""),w=o=>o.length>j,T=o=>w(o)?o.substring(0,j):o,O=(o,l)=>{S.value=o,R.value=l,h.value=!0},U=t(null),$=async o=>{c.value.id=o,U.value.click()},u=o=>{try{const l=o.target.files[0];if(l){const e=new FileReader;e.onload=async m=>{const _=new String(m.target.result).split(",")[1];try{c.value.id>0&&_.length>0&&(D.show("Aguarde... estamos colando a figurinha para voc\xEA..."),await z({imageBase64:_,stickerId:c.value.id})&&(r.value[c.value.id]=m.target.result,N("Uhul! Nova figurinha adicionada!")))}catch(I){C(I.message)}finally{D.hide()}},e.readAsDataURL(l)}}catch(l){C(l.message)}finally{}},d=t(!1),q=t(null),ee=async o=>{d.value=!0,q.value=null,c.value.id=o},ae=async o=>{q.value=o,d.value=!1;try{const l=new String(q.value).split(",")[1];c.value.id>0&&l.length>0&&(D.show("Aguarde... estamos colando a figurinha para voc\xEA..."),await z({imageBase64:l,stickerId:c.value.id})&&(r.value[c.value.id]=o,N("Uhul! Nova figurinha adicionada!"),q.value=null))}catch(l){C(l.message)}finally{D.hide()}},te=()=>{d.value=!1};return(o,l)=>(n(),Q(L,null,[a(pe,{class:"q-pa-lg"},{default:s(()=>[i("div",be,[i("div",xe,F(B.value),1),i("div",null,[a(p,{rounded:"",color:"primary",class:"button",icon:"home",label:"In\xEDcio",onClick:f})])]),a(de,{class:"q-my-md q-mx-md"}),Se,i("div",qe,[(n(!0),Q(L,null,ie(x.value,e=>(n(),g(H,{key:e.id,class:"col-12 col-md-2 rounded-card",flat:"",bordered:""},{default:s(()=>[v.value[e.id]?(n(),g(E,{key:0,name:v.value[e.id]==="Aprovada"?"check_circle":"cancel",class:"absolute-top-right q-pa-md",color:v.value[e.id]==="Aprovada"?"green":"red",size:"25px"},null,8,["name","color"])):y("",!0),a(A,null,{default:s(()=>[i("div",Ie,F(e.title),1),i("div",De,[ne(F(T(e.description))+" ",1),w(e.description)?(n(),Q("span",Ae,"...")):y("",!0),w(e.description)?(n(),g(p,{key:1,flat:"",dense:"",color:"primary",class:"text-caption",label:"Ver mais",onClick:m=>O(e.description,e.title)},null,8,["onClick"])):y("",!0)])]),_:2},1024),a(A,null,{default:s(()=>[a(me,{src:r.value[e.id]},{error:s(()=>[i("div",Qe,[a(E,{name:"warning",size:"64px",color:"grey-4"})])]),default:s(()=>[r.value[e.id]?y("",!0):(n(),Q("div",Ne,[a(E,{name:"add_photo_alternate",size:"64px",color:"grey-4"})]))]),_:2},1032,["src"])]),_:2},1024),a(A,null,{default:s(()=>[i("div",Pe,[a(p,{class:"col",rounded:"",color:"primary",label:"Carregar",icon:"upload",onClick:m=>$(e.id)},null,8,["onClick"]),a(p,{class:"col",rounded:"",color:"primary",label:"Capturar",icon:"camera_alt",onClick:m=>ee(e.id)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))])]),_:1}),a(X,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),persistent:""},{default:s(()=>[a(H,null,{default:s(()=>[a(A,null,{default:s(()=>[i("div",Fe,F(R.value),1)]),_:1}),a(A,null,{default:s(()=>[i("div",null,F(S.value),1)]),_:1}),a(G,{align:"right"},{default:s(()=>[K(a(p,{flat:"",label:"Fechar",color:"primary"},null,512),[[W]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(ke,{isOpen:d.value,onPhotoCaptured:ae,onClose:te},null,8,["isOpen"]),i("input",{type:"file",ref_key:"fileInput",ref:U,onChange:u,accept:"image/*",style:{display:"none"}},null,544)],64))}};var Ye=Z(Ve,[["__scopeId","data-v-da3704ae"]]);export{Ye as default};
