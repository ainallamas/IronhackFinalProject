import{c as v,i as f,u as w,r as c,q as g,o as b,a as I,b as s,h as x,w as d,v as r,k as y,s as S,x as k,p as N,e as z}from"./file_index.9dbf99e0.js";import{_ as V}from"./file__plugin-vue_export-helper.e718e6fb.js";const e=i=>(N("data-v-77649175"),i=i(),z(),i),C={class:"section"},P={class:"container"},Z=e(()=>s("div",{class:"welcome-message"},[s("h1",{class:"title welcome is-size-2 has-text-weight-bold"},"Please, sign up")],-1)),J={class:"sign-up"},M=["onSubmit"],O={class:"field"},T=e(()=>s("label",{class:"label is-size-4 has-text-weight-bold"},"Email",-1)),U={class:"control has-icons-left has-icons-right"},B=e(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1)),G={class:"field"},R=e(()=>s("label",{class:"label is-size-4 has-text-weight-bold"},"Password",-1)),X={class:"control has-icons-left has-icons-right"},j=e(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),A={class:"field"},D=e(()=>s("label",{class:"label is-size-4 has-text-weight-bold"},"Password confirmation",-1)),E={class:"control has-icons-left has-icons-right"},Y=e(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),H=e(()=>s("div",{class:"field"},[s("div",{class:"control"},[s("button",{class:"button is-link is-centered submit-button is-size-4 has-text-weight-bold",type:"submit"},"Start POST(PONE)ING")])],-1)),K={class:"login"},W={class:"field button is-link is-centered login-button"},q={__name:"Register",setup(i){v("https://wuipdhkpnvpplsmetylp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aXBkaGtwbnZwcGxzbWV0eWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3Njg5NywiZXhwIjoxOTgxNjUyODk3fQ.my4zcMKH1A3TM6z5DS_pCGUzyVXIuDgxNN4f0KIs0sI");const p=f(),u=w(),a=c(""),l=c(""),n=c(""),h=async()=>{if(l.value===n.value){try{await u.register(a.value,l.value)}catch(_){console.log(_)}alert(`Hello ${a.value}, please confirm your email.`),p.push({name:"login"})}else alert("Passwords do not match!")};return(_,t)=>{const m=g("router-link");return b(),I("div",C,[s("div",P,[Z,s("div",J,[s("form",{onSubmit:x(h,["prevent"])},[s("div",O,[T,s("div",U,[d(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),class:"input is-warning",type:"email",placeholder:"Email"},null,512),[[r,a.value]]),B])]),s("div",G,[R,s("div",X,[d(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),class:"input is-warning",type:"password",placeholder:"Password"},null,512),[[r,l.value]]),j])]),s("div",A,[D,s("div",E,[d(s("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),class:"input is-warning",type:"password",placeholder:"Password"},null,512),[[r,n.value]]),Y])]),H],40,M),s("div",K,[s("div",W,[y(m,{to:{name:"login"}},{default:S(()=>[k("Already have an account? Sign in")]),_:1})])])])])])}}},$=V(q,[["__scopeId","data-v-77649175"]]);export{$ as default};