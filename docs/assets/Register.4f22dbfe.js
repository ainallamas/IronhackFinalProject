import{c as p,i as _,u as m,r as i,o as h,a as I,b as s,w as v,e as n,v as c,F as w}from"./index.6b805ce8.js";const b=s("h1",null,"REGISTER",-1),f={class:"section"},y={class:"container"},S=["onSubmit"],x={class:"field"},N=s("label",{class:"label"},"Email",-1),g={class:"control"},k={class:"field"},z=s("label",{class:"label"},"Password",-1),V={class:"control"},Z=s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-link is-fullwidth",type:"submit",placeholder:"Text input"})])],-1),T={__name:"Register",setup(J){p("https://wuipdhkpnvpplsmetylp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aXBkaGtwbnZwcGxzbWV0eWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3Njg5NywiZXhwIjoxOTgxNjUyODk3fQ.my4zcMKH1A3TM6z5DS_pCGUzyVXIuDgxNN4f0KIs0sI");const r=_(),d=m(),e=i(""),l=i(""),u=async()=>{try{await d.register(e.value,l.value)}catch(a){console.log(a)}alert(`Hello ${e.value}, please confirm your email.`),r.push({name:"login"})};return(a,t)=>(h(),I(w,null,[b,s("div",f,[s("div",y,[s("form",{onSubmit:v(u,["prevent"])},[s("div",x,[N,s("div",g,[n(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),class:"input",type:"email",placeholder:"E-mail"},null,512),[[c,e.value]])])]),s("div",k,[z,s("div",V,[n(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),class:"input",type:"password",placeholder:"Password"},null,512),[[c,l.value]])])]),Z],40,S)])])],64))}};export{T as default};