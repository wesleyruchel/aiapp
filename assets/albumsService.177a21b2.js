import{aB as s,aE as e,aD as o}from"./index.f6f9de23.js";const u=async r=>{try{const t=await s.post("/albums",r,{headers:{"Content-Type":"application/json"}});return o(t)}catch(t){throw e(t)}},i=async(r,t)=>{try{const a=await s.put(`/albums/${r}`,t,{headers:{"Content-Type":"application/json"}});return o(a)}catch(a){throw e(a)}},m=async r=>{try{return(await s.get(`/albums/${r}`)).data}catch(t){throw e(t)}},h=async r=>{try{return{stickers:(await s.get(`/albums/${r}/stickers`)).data.map(({id:a,title:c,description:n})=>({id:a,title:c,description:n}))}}catch(t){throw e(t)}};export{h as a,u as c,m as f,i as u};
