import{i as n,aa as a}from"./index.a9ed6079.js";function c(){return n(a)}function m(){const s=c();return{showNotification:(o,t="positive",i=1500,e="top")=>{s.notify({type:t,message:o,timeout:i,position:e})},showSuccessNotification:(o,t=1500,i="bottom")=>{s.notify({type:"positive",message:o,timeout:t,position:i})},showErrorNotification:(o,t=1500,i="bottom")=>{s.notify({type:"negative",message:o,timeout:t,position:i})}}}export{m as u};
