import{aB as a,aC as i,aD as s,aE as r}from"./index.a77bf222.js";const l=async()=>{try{const e=await a.get("/me/profile");if(e)return e.data.bornDate&&(e.data.bornDate=i(e.data.bornDate)),s(e)}catch(e){throw r(e)}},m=async()=>{try{return{items:(await a.get("/me/albums",{headers:{"Content-Type":"application/json"}})).data.map(({id:t,title:o,imageUrl:n,description:c,blocked:p})=>({id:t,title:o,imageUrl:n,description:c,isLocked:p||!1}))}}catch(e){throw r(e)}},u=async e=>{try{const t=await a.post(`/me/albums/share/${e}`,null,{headers:{"Content-Type":"application/json"}});return s(t)}catch(t){throw r(t)}},y=async e=>{try{const t=await a.post(`/me/albums/shared/${e}`,null,{headers:{"Content-Type":"application/json"}});return s(t)}catch(t){throw r(t)}},d=async e=>{try{const t=await a.get(`/me/albums/${e}/stickers`);return s(t)}catch(t){throw r(t)}},w=async e=>{try{const t=await a.post("/me/albums/stickers",e,{headers:{"Content-Type":"application/json"}});return s(t)}catch(t){throw r(t)}},b=async e=>{try{const t=await a.get(`/me/albums/shared/correction/stickers/${e}`,{headers:{"Content-Type":"application/json"}});return s(t)}catch(t){throw r(t)}},f=async(e,t)=>{try{const o=await a.patch(`/me/albums/stickers/${e}`,[{op:"replace",path:"/status",value:`${t}`}],{headers:{"Content-Type":"application/json-patch+json"}});return s(o)}catch(o){throw r(o)}};export{m as a,y as b,d as c,l as f,b as g,w as p,u as s,f as u};
