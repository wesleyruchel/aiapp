import{c as D,ae as rt,af as jt,t as ot,r as k,w as z,h,a5 as se,B as Tt,g as lt,E as Je,Q as E,ag as $t,$ as At,k as Ft,R as Pt,f as N,m as We,S as J,n as G,O as ie}from"./index.a9ed6079.js";import{u as Et,a as Nt}from"./use-dark.8543b53f.js";import{u as Qt,b as Zt,a as Bt,Q as Ge}from"./QInput.065a56f6.js";import{Q as Rt}from"./QDialog.cc6cf142.js";import{u as zt,a as Lt,Q as Xt}from"./QMenu.8f833011.js";function Ut(){let e=Object.create(null);return{getCache:(r,u)=>e[r]===void 0?e[r]=typeof u=="function"?u():u:e[r],setCache(r,u){e[r]=u},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const L=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Jt(e,r,u){return Object.prototype.toString.call(e)==="[object Date]"&&(u=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),ea(Te(e,r,u))}function Ke(e,r,u){return st(Kt(e,r,u))}function Wt(e){return Gt(e)===0}function Me(e,r){return r<=6?31:r<=11||Wt(e)?30:29}function Gt(e){const r=L.length;let u=L[0],s,v,o,y,l;if(e<u||e>=L[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(s=L[l],v=s-u,!(e<s));l+=1)u=s;return y=e-u,v-y<6&&(y=y-v+C(v+4,33)*33),o=$($(y+1,33)-1,4),o===-1&&(o=4),o}function ut(e,r){const u=L.length,s=e+621;let v=-14,o=L[0],y,l,i,H,f;if(e<o||e>=L[u-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<u&&(y=L[f],l=y-o,!(e<y));f+=1)v=v+C(l,33)*8+C($(l,33),4),o=y;H=e-o,v=v+C(H,33)*8+C($(H,33)+3,4),$(l,33)===4&&l-H===4&&(v+=1);const M=C(s,4)-C((C(s,100)+1)*3,4)-150,j=20+v-M;return r||(l-H<6&&(H=H-l+C(l+4,33)*33),i=$($(H+1,33)-1,4),i===-1&&(i=4)),{leap:i,gy:s,march:j}}function Kt(e,r,u){const s=ut(e,!0);return Te(s.gy,3,s.march)+(r-1)*31-C(r,7)*(r-7)+u-1}function ea(e){const r=st(e).gy;let u=r-621,s,v,o;const y=ut(u,!1),l=Te(r,3,y.march);if(o=e-l,o>=0){if(o<=185)return v=1+C(o,31),s=$(o,31)+1,{jy:u,jm:v,jd:s};o-=186}else u-=1,o+=179,y.leap===1&&(o+=1);return v=7+C(o,30),s=$(o,30)+1,{jy:u,jm:v,jd:s}}function Te(e,r,u){let s=C((e+C(r-8,6)+100100)*1461,4)+C(153*$(r+9,12)+2,5)+u-34840408;return s=s-C(C(e+100100+C(r-8,6),100)*3,4)+752,s}function st(e){let r=4*e+139361631;r=r+C(C(4*e+183187720,146097)*3,4)*4-3908;const u=C($(r,1461),4)*5+308,s=C($(u,153),5)+1,v=$(C(u,153),12)+1;return{gy:C(r,1461)-100100+C(8-v,6),gm:v,gd:s}}function C(e,r){return~~(e/r)}function $(e,r){return e-~~(e/r)*r}function Y(e,r=2,u="0"){if(e==null)return e;const s=""+e;return s.length>=r?s:new Array(r-s.length+1).join(u)+s}const ta=["gregorian","persian"],et={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>ta.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},aa=["update:modelValue"];function B(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function na(e,r){const u=D(()=>e.disable!==!0&&e.readonly!==!0),s=D(()=>u.value===!0?0:-1),v=D(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(l){const i=new Date,H=l===!0?null:0;if(e.calendar==="persian"){const f=Jt(i);return{year:f.jy,month:f.jm,day:f.jd}}return{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate(),hour:H,minute:H,second:H,millisecond:H}}return{editable:u,tabindex:s,headerClass:v,getLocale:o,getCurrentDate:y}}const it=864e5,ra=36e5,je=6e4,ct="YYYY-MM-DDTHH:mm:ss.SSSZ",oa=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,la=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,ke={};function ua(e,r){const u="("+r.days.join("|")+")",s=e+u;if(ke[s]!==void 0)return ke[s];const v="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",l={};let i=0;const H=e.replace(la,M=>{switch(i++,M){case"YY":return l.YY=i,"(-?\\d{1,2})";case"YYYY":return l.YYYY=i,"(-?\\d{1,4})";case"M":return l.M=i,"(\\d{1,2})";case"Mo":return l.M=i++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return l.M=i,"(\\d{2})";case"MMM":return l.MMM=i,y;case"MMMM":return l.MMMM=i,o;case"D":return l.D=i,"(\\d{1,2})";case"Do":return l.D=i++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=i,"(\\d{2})";case"H":return l.H=i,"(\\d{1,2})";case"HH":return l.H=i,"(\\d{2})";case"h":return l.h=i,"(\\d{1,2})";case"hh":return l.h=i,"(\\d{2})";case"m":return l.m=i,"(\\d{1,2})";case"mm":return l.m=i,"(\\d{2})";case"s":return l.s=i,"(\\d{1,2})";case"ss":return l.s=i,"(\\d{2})";case"S":return l.S=i,"(\\d{1})";case"SS":return l.S=i,"(\\d{2})";case"SSS":return l.S=i,"(\\d{3})";case"A":return l.A=i,"(AM|PM)";case"a":return l.a=i,"(am|pm)";case"aa":return l.aa=i,"(a\\.m\\.|p\\.m\\.)";case"ddd":return v;case"dddd":return u;case"Q":case"d":case"E":return"(\\d{1})";case"do":return i++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return i++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return i++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return l.Z=i,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=i,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=i,"(-?\\d+)";case"x":return l.x=i,"(-?\\d{4,})";default:return i--,M[0]==="["&&(M=M.substring(1,M.length-1)),M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:l,regex:new RegExp("^"+H)};return ke[s]=f,f}function dt(e,r){return e!==void 0?e:r!==void 0?r.date:jt.date}function tt(e,r=""){const u=e>0?"-":"+",s=Math.abs(e),v=Math.floor(s/60),o=s%60;return u+Y(v)+r+Y(o)}function sa(e,r,u,s,v){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(v!==void 0&&Object.assign(o,v),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=ct);const y=dt(u,rt.props),l=y.months,i=y.monthsShort,{regex:H,map:f}=ua(r,y),M=e.match(H);if(M===null)return o;let j="";if(f.X!==void 0||f.x!==void 0){const x=parseInt(M[f.X!==void 0?f.X:f.x],10);if(isNaN(x)===!0||x<0)return o;const q=new Date(x*(f.X!==void 0?1e3:1));o.year=q.getFullYear(),o.month=q.getMonth()+1,o.day=q.getDate(),o.hour=q.getHours(),o.minute=q.getMinutes(),o.second=q.getSeconds(),o.millisecond=q.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(M[f.YYYY],10);else if(f.YY!==void 0){const x=parseInt(M[f.YY],10);o.year=x<0?x:2e3+x}if(f.M!==void 0){if(o.month=parseInt(M[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=i.indexOf(M[f.MMM])+1:f.MMMM!==void 0&&(o.month=l.indexOf(M[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(M[f.D],10),o.year===null||o.month===null||o.day<1)return o;const x=s!=="persian"?new Date(o.year,o.month,0).getDate():Me(o.year,o.month);if(o.day>x)return o}f.H!==void 0?o.hour=parseInt(M[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(M[f.h],10)%12,(f.A&&M[f.A]==="PM"||f.a&&M[f.a]==="pm"||f.aa&&M[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(M[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(M[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(M[f.S],10)*10**(3-M[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(j=f.Z!==void 0?M[f.Z].replace(":",""):M[f.ZZ],o.timezoneOffset=(j[0]==="+"?-1:1)*(60*j.slice(1,3)+1*j.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+j,o}function Oe(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const u=new Date(r.getFullYear(),0,4);u.setDate(u.getDate()-(u.getDay()+6)%7+3);const s=r.getTimezoneOffset()-u.getTimezoneOffset();r.setHours(r.getHours()-s);const v=(r-u)/(it*7);return 1+Math.floor(v)}function Q(e,r,u){const s=new Date(e),v=`set${u===!0?"UTC":""}`;switch(r){case"year":case"years":s[`${v}Month`](0);case"month":case"months":s[`${v}Date`](1);case"day":case"days":case"date":s[`${v}Hours`](0);case"hour":case"hours":s[`${v}Minutes`](0);case"minute":case"minutes":s[`${v}Seconds`](0);case"second":case"seconds":s[`${v}Milliseconds`](0)}return s}function ye(e,r,u){return(e.getTime()-e.getTimezoneOffset()*je-(r.getTime()-r.getTimezoneOffset()*je))/u}function vt(e,r,u="days"){const s=new Date(e),v=new Date(r);switch(u){case"years":case"year":return s.getFullYear()-v.getFullYear();case"months":case"month":return(s.getFullYear()-v.getFullYear())*12+s.getMonth()-v.getMonth();case"days":case"day":case"date":return ye(Q(s,"day"),Q(v,"day"),it);case"hours":case"hour":return ye(Q(s,"hour"),Q(v,"hour"),ra);case"minutes":case"minute":return ye(Q(s,"minute"),Q(v,"minute"),je);case"seconds":case"second":return ye(Q(s,"second"),Q(v,"second"),1e3)}}function Ve(e){return vt(e,Q(e,"year"),"days")+1}function ne(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const at={YY(e,r,u){const s=this.YYYY(e,r,u)%100;return s>=0?Y(s):"-"+Y(Math.abs(s))},YYYY(e,r,u){return u!=null?u:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return ne(e.getMonth()+1)},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return ne(this.Q(e))},D(e){return e.getDate()},Do(e){return ne(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return Ve(e)},DDDo(e){return ne(Ve(e))},DDDD(e){return Y(Ve(e),3)},d(e){return e.getDay()},do(e){return ne(e.getDay())},dd(e,r){return r.days[e.getDay()].slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Oe(e)},wo(e){return ne(Oe(e))},ww(e){return Y(Oe(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,r,u,s){const v=s==null?e.getTimezoneOffset():s;return tt(v,":")},ZZ(e,r,u,s){const v=s==null?e.getTimezoneOffset():s;return tt(v)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ia(e,r,u,s,v){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=ct);const y=dt(u,rt.props);return r.replace(oa,(l,i)=>l in at?at[l](o,y,s,v):i===void 0?l:i.split("\\]").join("]"))}const W=20,ca=["Calendar","Years","Months"],nt=e=>ca.includes(e),Ie=e=>/^-?[\d]+\/[0-1]\d$/.test(e),re=" \u2014 ";function R(e){return e.year+"/"+Y(e.month)}var Ma=ot({name:"QDate",props:{...et,...Qt,...Et,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...et.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ie},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ie},navigationMaxYearMonth:{type:String,validator:Ie},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:nt}},emits:[...aa,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:u}){const{proxy:s}=lt(),{$q:v}=s,o=Nt(e,v),{getCache:y}=Ut(),{tabindex:l,headerClass:i,getLocale:H,getCurrentDate:f}=na(e,v);let M;const j=Zt(e),x=Bt(j),q=k(null),_=k(Ze()),p=k(H()),ft=D(()=>Ze()),mt=D(()=>H()),P=D(()=>f()),g=k(Be(_.value,p.value)),T=k(e.defaultView),$e=D(()=>v.lang.rtl===!0?"right":"left"),ce=k($e.value),De=k($e.value),be=g.value.year,de=k(be-be%W-(be<0?W:0)),I=k(null),ht=D(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),X=D(()=>e.color||"primary"),K=D(()=>e.textColor||"white"),ve=D(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),we=D(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),F=D(()=>we.value.filter(t=>typeof t=="string").map(t=>Se(t,_.value,p.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),ee=D(()=>{const t=a=>Se(a,_.value,p.value);return we.value.filter(a=>$t(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),fe=D(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Ke(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),_e=D(()=>e.calendar==="persian"?B:(t,a,n)=>ia(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?_.value:a,n===void 0?p.value:n,t.year,t.timezoneOffset)),oe=D(()=>F.value.length+ee.value.reduce((t,a)=>t+1+vt(fe.value(a.to),fe.value(a.from)),0)),Ae=D(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(I.value!==null){const n=I.value.init,c=fe.value(n);return p.value.daysShort[c.getDay()]+", "+p.value.monthsShort[n.month-1]+" "+n.day+re+"?"}if(oe.value===0)return re;if(oe.value>1)return`${oe.value} ${p.value.pluralDay}`;const t=F.value[0],a=fe.value(t);return isNaN(a.valueOf())===!0?re:p.value.headerTitle!==void 0?p.value.headerTitle(a,t):p.value.daysShort[a.getDay()]+", "+p.value.monthsShort[t.month-1]+" "+t.day}),gt=D(()=>F.value.concat(ee.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),yt=D(()=>F.value.concat(ee.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Fe=D(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(oe.value===0)return re;if(oe.value>1){const t=gt.value,a=yt.value,n=p.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+re+n[a.month-1]+" ":t.month!==a.month?re+n[a.month-1]:"")+" "+a.year}return F.value[0].year}),me=D(()=>{const t=[v.iconSet.datetime.arrowLeft,v.iconSet.datetime.arrowRight];return v.lang.rtl===!0?t.reverse():t}),Pe=D(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):p.value.firstDayOfWeek),Mt=D(()=>{const t=p.value.daysShort,a=Pe.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=D(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():Me(t.year,t.month)}),Dt=D(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),O=D(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),V=D(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Ye=D(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return O.value!==null&&O.value.year>=g.value.year&&(t.year.prev=!1,O.value.year===g.value.year&&O.value.month>=g.value.month&&(t.month.prev=!1)),V.value!==null&&V.value.year<=g.value.year&&(t.year.next=!1,V.value.year===g.value.year&&V.value.month<=g.value.month&&(t.month.next=!1)),t}),he=D(()=>{const t={};return F.value.forEach(a=>{const n=R(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ee=D(()=>{const t={};return ee.value.forEach(a=>{const n=R(a.from),c=R(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===c?a.to.day:void 0,range:a}),n<c){let d;const{year:w,month:m}=a.from,b=m<12?{year:w,month:m+1}:{year:w+1,month:1};for(;(d=R(b))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?a.to.day:void 0,range:a}),b.month++,b.month>12&&(b.year++,b.month=1)}}),t}),le=D(()=>{if(I.value===null)return;const{init:t,initHash:a,final:n,finalHash:c}=I.value,[d,w]=a<=c?[t,n]:[n,t],m=R(d),b=R(w);if(m!==A.value&&b!==A.value)return;const S={};return m===A.value?(S.from=d.day,S.includeFrom=!0):S.from=1,b===A.value?(S.to=w.day,S.includeTo=!0):S.to=Z.value,S}),A=D(()=>R(g.value)),bt=D(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Z.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Z.value;n++){const c=A.value+"/"+Y(n);t[n]=a(c)}return t}),wt=D(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Z.value;n++){const c=A.value+"/"+Y(n);t[n]=a(c)===!0&&Dt.value(c)}}return t}),_t=D(()=>{let t,a;const{year:n,month:c}=g.value;if(e.calendar!=="persian")t=new Date(n,c-1,1),a=new Date(n,c-1,0).getDate();else{const d=Ke(n,c,1);t=new Date(d.gy,d.gm-1,d.gd);let w=c-1,m=n;w===0&&(w=12,m--),a=Me(m,w)}return{days:t.getDay()-Pe.value-1,endDay:a}}),Ne=D(()=>{const t=[],{days:a,endDay:n}=_t.value,c=a<0?a+7:a;if(c<6)for(let m=n-c;m<=n;m++)t.push({i:m,fill:!0});const d=t.length;for(let m=1;m<=Z.value;m++){const b={i:m,event:wt.value[m],classes:[]};bt.value[m]===!0&&(b.in=!0,b.flat=!0),t.push(b)}if(he.value[A.value]!==void 0&&he.value[A.value].forEach(m=>{const b=d+m-1;Object.assign(t[b],{selected:!0,unelevated:!0,flat:!1,color:X.value,textColor:K.value})}),Ee.value[A.value]!==void 0&&Ee.value[A.value].forEach(m=>{if(m.from!==void 0){const b=d+m.from-1,S=d+(m.to||Z.value)-1;for(let ue=b;ue<=S;ue++)Object.assign(t[ue],{range:m.range,unelevated:!0,color:X.value,textColor:K.value});Object.assign(t[b],{rangeFrom:!0,flat:!1}),m.to!==void 0&&Object.assign(t[S],{rangeTo:!0,flat:!1})}else if(m.to!==void 0){const b=d+m.to-1;for(let S=d;S<=b;S++)Object.assign(t[S],{range:m.range,unelevated:!0,color:X.value,textColor:K.value});Object.assign(t[b],{flat:!1,rangeTo:!0})}else{const b=d+Z.value-1;for(let S=d;S<=b;S++)Object.assign(t[S],{range:m.range,unelevated:!0,color:X.value,textColor:K.value})}}),le.value!==void 0){const m=d+le.value.from-1,b=d+le.value.to-1;for(let S=m;S<=b;S++)t[S].color=X.value,t[S].editRange=!0;le.value.includeFrom===!0&&(t[m].editRangeFrom=!0),le.value.includeTo===!0&&(t[b].editRangeTo=!0)}g.value.year===P.value.year&&g.value.month===P.value.month&&(t[d+P.value.day-1].today=!0);const w=t.length%7;if(w>0){const m=7-w;for(let b=1;b<=m;b++)t.push({i:b,fill:!0})}return t.forEach(m=>{let b="q-date__calendar-item ";m.fill===!0?b+="q-date__calendar-item--fill":(b+=`q-date__calendar-item--${m.in===!0?"in":"out"}`,m.range!==void 0&&(b+=` q-date__range${m.rangeTo===!0?"-to":m.rangeFrom===!0?"-from":""}`),m.editRange===!0&&(b+=` q-date__edit-range${m.editRangeFrom===!0?"-from":""}${m.editRangeTo===!0?"-to":""}`),(m.range!==void 0||m.editRange===!0)&&(b+=` text-${m.color}`)),m.classes=b}),t}),Yt=D(()=>e.disable===!0?{"aria-disabled":"true"}:{});z(()=>e.modelValue,t=>{if(M===t)M=0;else{const a=Be(_.value,p.value);te(a.year,a.month,a)}}),z(T,()=>{q.value!==null&&s.$el.contains(document.activeElement)===!0&&q.value.focus()}),z(()=>g.value.year+"|"+g.value.month,()=>{u("navigation",{year:g.value.year,month:g.value.month})}),z(ft,t=>{Ue(t,p.value,"mask"),_.value=t}),z(mt,t=>{Ue(_.value,t,"locale"),p.value=t});function Qe(){const{year:t,month:a,day:n}=P.value,c={...g.value,year:t,month:a,day:n},d=he.value[R(c)];(d===void 0||d.includes(c.day)===!1)&&He(c),xe(c.year,c.month)}function xt(t){nt(t)===!0&&(T.value=t)}function St(t,a){["month","year"].includes(t)&&(t==="month"?ze:Ce)(a===!0?-1:1)}function xe(t,a){T.value="Calendar",te(t,a)}function Ct(t,a){if(e.range===!1||!t){I.value=null;return}const n=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):n;I.value={init:n,initHash:B(n),final:c,finalHash:B(c)},xe(n.year,n.month)}function Ze(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function Se(t,a,n){return sa(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Be(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Re();const c=n[n.length-1],d=Se(c.from!==void 0?c.from:c,t,a);return d.dateHash===null?Re():d}function Re(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=P.value!==void 0?P.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function ze(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),te(a,n),ve.value===!0&&ge("month")}function Ce(t){const a=Number(g.value.year)+t;te(a,g.value.month),ve.value===!0&&ge("year")}function Ht(t){te(t,g.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",ve.value===!0&&ge("year")}function pt(t){te(g.value.year,t),T.value="Calendar",ve.value===!0&&ge("month")}function qt(t,a){const n=he.value[a];(n!==void 0&&n.includes(t.day)===!0?pe:He)(t)}function U(t){return{year:t.year,month:t.month,day:t.day}}function te(t,a,n){if(O.value!==null&&t<=O.value.year&&((a<O.value.month||t<O.value.year)&&(a=O.value.month),t=O.value.year),V.value!==null&&t>=V.value.year&&((a>V.value.month||t>V.value.year)&&(a=V.value.month),t=V.value.year),n!==void 0){const{hour:d,minute:w,second:m,millisecond:b,timezoneOffset:S,timeHash:ue}=n;Object.assign(g.value,{hour:d,minute:w,second:m,millisecond:b,timezoneOffset:S,timeHash:ue})}const c=t+"/"+Y(a)+"/01";c!==g.value.dateHash&&(ce.value=g.value.dateHash<c==(v.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(De.value=ce.value),Je(()=>{de.value=t-t%W-(t<0?W:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:c})}))}function Le(t,a,n){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;M=c;const{reason:d,details:w}=Xe(a,n);u("update:modelValue",c,d,w)}function ge(t){const a=F.value[0]!==void 0&&F.value[0].dateHash!==null?{...F.value[0]}:{...g.value};Je(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():Me(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const c=ae(a);M=c;const{details:d}=Xe("",a);u("update:modelValue",c,t,d)})}function Xe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...U(a.target),from:U(a.from),to:U(a.to)}}:{reason:`${t}-day`,details:U(a)}}function ae(t,a,n){return t.from!==void 0?{from:_e.value(t.from,a,n),to:_e.value(t.to,a,n)}:_e.value(t,a,n)}function He(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=B(t.from),c=B(t.to),d=F.value.filter(m=>m.dateHash<n||m.dateHash>c),w=ee.value.filter(({from:m,to:b})=>b.dateHash<n||m.dateHash>c);a=d.concat(w).concat(t).map(m=>ae(m))}else{const n=we.value.slice();n.push(ae(t)),a=n}else a=ae(t);Le(a,"add",t)}function pe(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=ae(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==n.from&&c.to!==n.to:!0):a=e.modelValue.filter(c=>c!==n),a.length===0&&(a=null)}Le(a,"remove",t)}function Ue(t,a,n){const c=F.value.concat(ee.value).map(d=>ae(d,t,a)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);u("update:modelValue",(e.multiple===!0?c:c[0])||null,n)}function kt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+i.value},[h("div",{class:"relative-position"},[h(se,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Fe.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Fe.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(se,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Ae.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[Ae.value]))]),e.todayBtn===!0?h(E,{class:"q-date__header-today self-start",icon:v.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:Qe}):null])])}function qe({label:t,type:a,key:n,dir:c,goTo:d,boundaries:w,cls:m}){return[h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[0],tabindex:l.value,disable:w.prev===!1,...y("go-#"+a,{onClick(){d(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+m},[h(se,{name:"q-transition--jump-"+c},()=>h("div",{key:n},[h(E,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...y("view#"+a,{onClick:()=>{T.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[1],tabindex:l.value,disable:w.next===!1,...y("go+#"+a,{onClick(){d(1)}})})])]}const Ot={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},qe({label:p.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:ce.value,goTo:ze,boundaries:Ye.value.month,cls:" col"}).concat(qe({label:g.value.year,type:"Years",key:g.value.year,dir:De.value,goTo:Ce,boundaries:Ye.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Mt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(se,{name:"q-transition--slide-"+ce.value},()=>h("div",{key:A.value,class:"q-date__calendar-days fit"},Ne.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(E,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...y("day#"+t.i,{onClick:()=>{Vt(t.i)},onMouseover:()=>{It(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===P.value.year,a=c=>O.value!==null&&g.value.year===O.value.year&&O.value.month>c||V.value!==null&&g.value.year===V.value.year&&V.value.month<c,n=p.value.monthsShort.map((c,d)=>{const w=g.value.month===d+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(E,{class:t===!0&&P.value.month===d+1?"q-date__today":null,flat:w!==!0,label:c,unelevated:w,color:w===!0?X.value:null,textColor:w===!0?K.value:null,tabindex:l.value,disable:a(d+1),...y("month#"+d,{onClick:()=>{pt(d+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[qe({label:g.value.year,type:"Years",key:g.value.year,dir:De.value,goTo:Ce,boundaries:Ye.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=de.value,a=t+W,n=[],c=d=>O.value!==null&&O.value.year>d||V.value!==null&&V.value.year<d;for(let d=t;d<=a;d++){const w=g.value.year===d;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(E,{key:"yr"+d,class:P.value.year===d?"q-date__today":null,flat:!w,label:d,dense:!0,unelevated:w,color:w===!0?X.value:null,textColor:w===!0?K.value:null,tabindex:l.value,disable:c(d),...y("yr#"+d,{onClick:()=>{Ht(d)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:me.value[0],tabindex:l.value,disable:c(t),...y("y-",{onClick:()=>{de.value-=W}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:me.value[1],tabindex:l.value,disable:c(a),...y("y+",{onClick:()=>{de.value+=W}})})])])}};function Vt(t){const a={...g.value,day:t};if(e.range===!1){qt(a,A.value);return}if(I.value===null){const n=Ne.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&n.range!==void 0){pe({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){pe(a);return}const c=B(a);I.value={init:a,initHash:c,final:a,finalHash:c},u("rangeStart",U(a))}else{const n=I.value.initHash,c=B(a),d=n<=c?{from:I.value.init,to:a}:{from:a,to:I.value.init};I.value=null,He(n===c?a:{target:a,...d}),u("rangeEnd",{from:U(d.from),to:U(d.to)})}}function It(t){if(I.value!==null){const a={...g.value,day:t};Object.assign(I.value,{final:a,finalHash:B(a)})}}return Object.assign(s,{setToday:Qe,setView:xt,offsetCalendar:St,setCalendarTo:xe,setEditingRange:Ct}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(se,{name:"q-transition--fade"},Ot[T.value])])],a=Tt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&x(t,"push"),h("div",{class:ht.value,...Yt.value},[kt(),h("div",{ref:q,class:"q-date__main col column",tabindex:-1},t)])}}}),Da=ot({name:"QPopupProxy",props:{...zt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:u,attrs:s}){const{proxy:v}=lt(),{$q:o}=v,y=k(!1),l=k(null),i=D(()=>parseInt(e.breakpoint,10)),{canShow:H}=Lt({showing:y});function f(){return o.screen.width<i.value||o.screen.height<i.value?"dialog":"menu"}const M=k(f()),j=D(()=>M.value==="menu"?{maxHeight:"99vh"}:{});z(()=>f(),_=>{y.value!==!0&&(M.value=_)});function x(_){y.value=!0,u("show",_)}function q(_){y.value=!1,M.value=f(),u("hide",_)}return Object.assign(v,{show(_){H(_)===!0&&l.value.show(_)},hide(_){l.value.hide(_)},toggle(_){l.value.toggle(_)}}),At(v,"currentComponent",()=>({type:M.value,ref:l.value})),()=>{const _={ref:l,...j.value,...s,onShow:x,onHide:q};let p;return M.value==="dialog"?p=Rt:(p=Xt,Object.assign(_,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(p,_,r.default)}}});const da={class:"password-criteria q-pa-sm q-mb-md"},va=G("div",{class:"text-subtitle2 q-mb-sm"},"A senha precisa conter:",-1),ba={__name:"PasswordConfirmation",props:{modelValue:Object},emits:["update:modelValue"],setup(e,{emit:r}){const u=e,s=r,v=k(u.modelValue.password),o=k(u.modelValue.confirmPassword),y=k(!0),l=k(!0),i=k({length:!1,capital:!1,lower:!1,number:!1,symbol:!1}),H=x=>f(x)||"Todos os crit\xE9rios precisam ser atendidos",f=x=>(i.value.length=x.length>=6,i.value.capital=/^(?=.*[A-Z])/.test(x),i.value.lower=/^(?=.*[a-z])/.test(x),i.value.number=/^(?=.*[0-9])/.test(x),i.value.symbol=/^(?=.*[!@#\$%\^&\*_\-=+])/.test(x),i.value.length&&i.value.capital&&i.value.lower&&i.value.number&&i.value.symbol),M=D(()=>f(v.value)),j=D(()=>M.value&&v.value!==o.value);return z(v,x=>{s("update:modelValue",{...u.modelValue,password:x})}),z(o,x=>{s("update:modelValue",{...u.modelValue,confirmPassword:x})}),(x,q)=>(Ft(),Pt("div",null,[N(Ge,{modelValue:v.value,"onUpdate:modelValue":q[1]||(q[1]=_=>v.value=_),label:"Senha *",type:y.value?"password":"text",rounded:"",outlined:"",class:"q-mb-md",rules:[H]},{append:We(()=>[N(J,{name:y.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:q[0]||(q[0]=_=>y.value=!y.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),G("div",da,[va,G("div",null,[N(J,{name:i.value.length?"check_circle":"cancel",color:i.value.length?"positive":"negative"},null,8,["name","color"]),ie(" A senha deve conter no min\xEDmo 6 caracteres.. ")]),G("div",null,[N(J,{name:i.value.capital?"check_circle":"cancel",color:i.value.capital?"positive":"negative"},null,8,["name","color"]),ie(" A senha deve conter ao menos uma letra maiuscula (A-Z). ")]),G("div",null,[N(J,{name:i.value.lower?"check_circle":"cancel",color:i.value.lower?"positive":"negative"},null,8,["name","color"]),ie(" A senha deve conter ao menos uma letra minuscula (a-z). ")]),G("div",null,[N(J,{name:i.value.number?"check_circle":"cancel",color:i.value.number?"positive":"negative"},null,8,["name","color"]),ie(" A senha deve conter ao menos um n\xFAmero (0-9). ")]),G("div",null,[N(J,{name:i.value.symbol?"check_circle":"cancel",color:i.value.symbol?"positive":"negative"},null,8,["name","color"]),ie(" A senha deve conter ao menos um caracter especial: !@#$%^&*()-_+= ")])]),N(Ge,{modelValue:o.value,"onUpdate:modelValue":q[3]||(q[3]=_=>o.value=_),label:"Confirmar senha *",type:l.value?"password":"text",rounded:"",outlined:"",class:"q-mb-md",disable:!M.value,error:j.value,"error-message":"As senhas n\xE3o conferem"},{append:We(()=>[N(J,{name:l.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:q[2]||(q[2]=_=>l.value=!l.value)},null,8,["name"])]),_:1},8,["modelValue","type","disable","error"])]))}};export{Da as Q,ba as _,Ma as a};
