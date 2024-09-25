import{t as d,c as a,h as o,B as q,av as w,aw as I,r as b,al as K,a0 as R,x as $,g as k}from"./index.129f0960.js";import{u as g,a as y}from"./use-dark.ab9d8e94.js";var A=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:l.value},q(n.default))}}),P=d({name:"QItem",props:{...g,...w,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:i}}=k(),c=y(e,i),{hasLink:v,linkAttrs:B,linkClass:h,linkTag:_,navigateOnClick:C}=I(),s=b(null),r=b(null),m=a(()=>e.clickable===!0||v.value===!0||e.tag==="label"),u=a(()=>e.disable!==!0&&m.value===!0),x=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function E(t){u.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),C(t))}function Q(t){if(u.value===!0&&K(t,[13,32])===!0){R(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,s.value.dispatchEvent(f)}l("keyup",t)}function S(){const t=$(n.default,[]);return u.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:s,class:x.value,style:L.value,role:"listitem",onClick:E,onKeyup:Q};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,B.value)):m.value===!0&&(t["aria-disabled"]="true"),o(_.value,t,S())}}}),F=d({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=k(),i=y(e,l.proxy.$q),c=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:c.value},q(n.default))}});export{F as Q,P as a,A as b};
