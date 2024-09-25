import{c as l,t as H,r as s,z as M,o as E,h as n,a5 as F,B as O,a4 as P,w as A,a9 as h,g as W}from"./index.1986f44e.js";import{u as T}from"./use-timeout.88b09f9d.js";const x={ratio:[String,Number]};function G(e,o){return l(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const J=1.7778;var V=H({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),_=G(e,y),m=W(),{registerTimeout:C,removeTimeout:v}=T(),{registerTimeout:z,removeTimeout:b}=T(),f=l(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),L=l(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(f.value)],a=s(0),c=s(!1),g=s(!1),N=l(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=l(()=>({width:e.width,height:e.height})),I=l(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),R=l(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(b(),e.loadingShowDelay===0){c.value=!0;return}z(()=>{c.value=!0},e.loadingShowDelay)}function S(){b(),c.value=!1}function j({target:t}){h(m)===!1&&(v(),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,r){r===1e3||h(m)===!0||(t.complete===!0?D(t):C(()=>{w(t,r+1)},50))}function D(t){h(m)!==!0&&(a.value=a.value^1,i[a.value].value=null,S(),t.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",t.currentSrc||t.src))}function Q(t){v(),S(),g.value=!0,i[a.value].value=L.value,i[a.value^1].value=f.value,u("error",t)}function q(t){const r=i[t].value,d={key:"img_"+t,class:I.value,style:R.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return a.value===t?Object.assign(d,{class:d.class+"current",onLoad:j,onError:Q}):d.class+="loaded",n("div",{class:"q-img__container absolute-full",key:"img"+t},n("img",d))}function $(){return c.value===!1?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(o[g.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[n(P,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){A(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{v(),g.value=!1,r===null?(S(),i[a.value^1].value=f.value):B(),i[a.value].value=r},{immediate:!0})};M.value===!0?E(t):t()}return()=>{const t=[];return _.value!==null&&t.push(n("div",{key:"filler",style:_.value})),i[0].value!==null&&t.push(q(0)),i[1].value!==null&&t.push(q(1)),t.push(n(F,{name:"q-transition--fade"},$)),n("div",{key:"main",class:N.value,style:k.value,role:"img","aria-label":e.alt},t)}}});export{V as Q};
