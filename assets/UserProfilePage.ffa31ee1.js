import{U as Q,r as w,o as D,k as N,l as _,m as t,f as e,n as m,Q as r,W as d,S}from"./index.43ee95f8.js";import{Q as n}from"./QInput.b397d8bc.js";import{Q as q,a as U,_ as k}from"./PasswordConfirmation.c71fe375.js";import{Q as i}from"./QForm.e77cd0f1.js";import{a as P,Q as g}from"./QCard.1fd63515.js";import{Q as x}from"./QPage.40f78098.js";import{f as B}from"./userService.40a0eee1.js";import{u as C}from"./notificationUtils.bfa0d048.js";import"./use-dark.d5070b26.js";import"./focus-manager.40072c15.js";import"./QDialog.c23111c3.js";import"./use-timeout.d95a2994.js";import"./focusout.8b4590d2.js";import"./QMenu.297a0e03.js";const M={class:"row items-center justify-between q-mt-md q-mb-md q-mx-md"},Y={class:"row justify-end q-pb-md"},j={class:"row justify-end"},X={__name:"UserProfilePage",setup(R){const p=Q(),{showSuccessNotification:h,showErrorNotification:u}=C(),a=w({type:"",firstName:"",lastName:"",email:"",bornDate:null,username:"",password:"",confirmPassword:""}),f=[s=>s&&s.length>0||"\xC9 necess\xE1rio informar um nome."],c=[s=>s&&s.length>0||"\xC9 necess\xE1rio informar um e-mail.",s=>/^\S+@\S+\.\S+$/.test(s)||"\xC9 necess\xE1rio informar um e-mail v\xE1lido."];D(async()=>{V()});const b=()=>{p.back()},V=async()=>{const s=await B();a.value=s.data},v=async()=>{u("Desculpe, ainda n\xE3o implementamos essa funcionalidade :(")},y=async()=>{u("Desculpe, ainda n\xE3o implementamos essa funcionalidade :(")};return(s,o)=>(N(),_(x,{class:"padding"},{default:t(()=>[e(g,{class:"q-pa-md"},{default:t(()=>[m("div",M,[e(r,{rounded:"",color:"primary",icon:"arrow_back",label:"Voltar",onClick:b})]),e(P,null,{default:t(()=>[e(i,{onSubmit:d(v,["prevent"])},{default:t(()=>[e(n,{modelValue:a.value.firstName,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.firstName=l),label:"Nome",rounded:"",outlined:"",class:"q-mb-md","lazy-rules":"",rules:f},null,8,["modelValue"]),e(n,{modelValue:a.value.lastName,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.lastName=l),label:"Sobrenome",rounded:"",outlined:"",class:"q-mb-md"},null,8,["modelValue"]),e(n,{modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.email=l),label:"E-mail",rounded:"",outlined:"",class:"q-mb-md","lazy-rules":"",rules:c},null,8,["modelValue"]),e(n,{modelValue:a.value.bornDate,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.bornDate=l),label:"Data nascimento",rounded:"",outlined:"",class:"q-mb-md",mask:"##/##/####"},{append:t(()=>[e(S,{name:"event",class:"cursor-pointer"},{default:t(()=>[e(q,null,{default:t(()=>[e(U,{modelValue:a.value.bornDate,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.bornDate=l),mask:"DD/MM/YYYY"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),m("div",Y,[e(r,{label:"Alterar dados",type:"submit",rounded:"",color:"primary"})])]),_:1}),e(i,{onSubmit:d(y,["prevent"])},{default:t(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.username=l),label:"Nome de usu\xE1rio",rounded:"",outlined:"",class:"q-mb-md",disable:!0},null,8,["modelValue"]),e(k,{modelValue:a.value,"onUpdate:modelValue":o[6]||(o[6]=l=>a.value=l)},null,8,["modelValue"]),m("div",j,[e(r,{label:"Alterar senha",type:"submit",rounded:"",color:"primary"})])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{X as default};
