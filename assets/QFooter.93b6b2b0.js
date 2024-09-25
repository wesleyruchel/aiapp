import{b as _}from"./QLayout.688a84b7.js";import{t as $,i as C,u as y,r as z,c as o,w as c,v as O,x as I,h as b,y as L,g as R,z as N,A as P}from"./index.a9ed6079.js";var A=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:Q,emit:V}){const{proxy:{$q:f}}=R(),e=C(L,y);if(e===y)return console.error("QHeader needs to be child of QLayout"),y;const n=z(parseInt(a.heightHint,10)),l=z(!0),g=o(()=>a.reveal===!0||e.view.value.indexOf("H")!==-1||f.platform.is.ios&&e.isContainer.value===!0),h=o(()=>{if(a.modelValue!==!0)return 0;if(g.value===!0)return l.value===!0?n.value:0;const t=n.value-e.scroll.value.position;return t>0?t:0}),w=o(()=>a.modelValue!==!0||g.value===!0&&l.value!==!0),q=o(()=>a.modelValue===!0&&w.value===!0&&a.reveal===!0),x=o(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(a.bordered===!0?" q-header--bordered":"")+(w.value===!0?" q-header--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus":"")),B=o(()=>{const t=e.rows.value.top,d={};return t[0]==="l"&&e.left.space===!0&&(d[f.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),t[2]==="r"&&e.right.space===!0&&(d[f.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),d});function r(t,d){e.update("header",t,d)}function m(t,d){t.value!==d&&(t.value=d)}function i({height:t}){m(n,t),r("size",t)}function v(t){q.value===!0&&m(l,!0),V("focusin",t)}c(()=>a.modelValue,t=>{r("space",t),m(l,!0),e.animate()}),c(h,t=>{r("offset",t)}),c(()=>a.reveal,t=>{t===!1&&m(l,a.modelValue)}),c(l,t=>{e.animate(),V("reveal",t)}),c(e.scroll,t=>{a.reveal===!0&&m(l,t.direction==="up"||t.position<=a.revealOffset||t.position-t.inflectionPoint<100)});const H={};return e.instances.header=H,a.modelValue===!0&&r("size",n.value),r("space",a.modelValue),r("offset",h.value),O(()=>{e.instances.header===H&&(e.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const t=I(Q.default,[]);return a.elevated===!0&&t.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(b(_,{debounce:0,onResize:i})),b("header",{class:x.value,style:B.value,onFocusin:v},t)}}}),K=$({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:Q,emit:V}){const{proxy:{$q:f}}=R(),e=C(L,y);if(e===y)return console.error("QFooter needs to be child of QLayout"),y;const n=z(parseInt(a.heightHint,10)),l=z(!0),g=z(N.value===!0||e.isContainer.value===!0?0:window.innerHeight),h=o(()=>a.reveal===!0||e.view.value.indexOf("F")!==-1||f.platform.is.ios&&e.isContainer.value===!0),w=o(()=>e.isContainer.value===!0?e.containerHeight.value:g.value),q=o(()=>{if(a.modelValue!==!0)return 0;if(h.value===!0)return l.value===!0?n.value:0;const u=e.scroll.value.position+w.value+n.value-e.height.value;return u>0?u:0}),x=o(()=>a.modelValue!==!0||h.value===!0&&l.value!==!0),B=o(()=>a.modelValue===!0&&x.value===!0&&a.reveal===!0),r=o(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),m=o(()=>{const u=e.rows.value.bottom,s={};return u[0]==="l"&&e.left.space===!0&&(s[f.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),u[2]==="r"&&e.right.space===!0&&(s[f.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),s});function i(u,s){e.update("footer",u,s)}function v(u,s){u.value!==s&&(u.value=s)}function H({height:u}){v(n,u),i("size",u)}function t(){if(a.reveal!==!0)return;const{direction:u,position:s,inflectionPoint:S}=e.scroll.value;v(l,u==="up"||s-S<100||e.height.value-w.value-s-n.value<300)}function d(u){B.value===!0&&v(l,!0),V("focusin",u)}c(()=>a.modelValue,u=>{i("space",u),v(l,!0),e.animate()}),c(q,u=>{i("offset",u)}),c(()=>a.reveal,u=>{u===!1&&v(l,a.modelValue)}),c(l,u=>{e.animate(),V("reveal",u)}),c([n,e.scroll,e.height],t),c(()=>f.screen.height,u=>{e.isContainer.value!==!0&&v(g,u)});const F={};return e.instances.footer=F,a.modelValue===!0&&i("size",n.value),i("space",a.modelValue),i("offset",q.value),O(()=>{e.instances.footer===F&&(e.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const u=P(Q.default,[b(_,{debounce:0,onResize:H})]);return a.elevated===!0&&u.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),b("footer",{class:r.value,style:m.value,onFocusin:d},u)}}});export{A as Q,K as a};
