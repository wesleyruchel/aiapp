import{ax as a,ay as i,az as s,aA as r}from"./index.e6b745d5.js";const l=async()=>{try{const t=await a.get("/me/profile");if(t)return t.data.bornDate&&(t.data.bornDate=i(t.data.bornDate)),s(t)}catch(t){throw r(t)}},m=async()=>{try{return{items:(await a.get("/me/albums",{headers:{"Content-Type":"application/json"}})).data.map(({id:e,title:o,imageUrl:n,description:c,blocked:p})=>({id:e,title:o,imageUrl:n,description:c,isLocked:p||!1}))}}catch(t){throw r(t)}},u=async t=>{try{const e=await a.post(`/me/albums/share/${t}`,null,{headers:{"Content-Type":"application/json"}});return s(e)}catch(e){throw r(e)}},y=async t=>{try{const e=await a.post(`/me/albums/shared/${t}`,null,{headers:{"Content-Type":"application/json"}});return s(e)}catch(e){throw r(e)}},d=async t=>{try{const e=await a.get(`/me/albums/${t}/stickers`);return s(e)}catch(e){throw r(e)}},w=async t=>{try{const e=await a.post("/me/albums/stickers",t,{headers:{"Content-Type":"application/json"}});return s(e)}catch(e){throw r(e)}},b=async()=>{try{const t=await a.get("/me/albums/shared/correction/stickers",{headers:{"Content-Type":"application/json"}});return s(t)}catch(t){throw r(t)}},f=async(t,e)=>{try{const o=await a.patch(`/me/albums/stickers/${t}`,[{op:"replace",path:"/status",value:`${e}`}],{headers:{"Content-Type":"application/json-patch+json"}});return s(o)}catch(o){throw r(o)}};export{m as a,y as b,d as c,l as f,b as g,w as p,u as s,f as u};
