import{c as m,g as h,u as v,r as i,k as w,o as f,a as b,b as s,f as I,w as n,v as c,h as y,m as g,q as x}from"./file_index.1dd5d038.js";const N={class:"section"},k={class:"container"},S=s("h1",{class:"title"},"Please, sign up",-1),V=["onSubmit"],C={class:"field"},z=s("label",{class:"label"},"Email",-1),Z={class:"control"},J={class:"field"},M=s("label",{class:"label"},"Password",-1),P={class:"control"},T={class:"field"},U=s("label",{class:"label"},"Password confirmation",-1),B={class:"control"},X=s("div",{class:"field"},[s("div",{class:"control"},[s("button",{class:"button is-link is-fullwidth",type:"submit",placeholder:"Text input"},"Submit")])],-1),j={class:"button register-button"},G={__name:"Register",setup(A){m("https://wuipdhkpnvpplsmetylp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aXBkaGtwbnZwcGxzbWV0eWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3Njg5NywiZXhwIjoxOTgxNjUyODk3fQ.my4zcMKH1A3TM6z5DS_pCGUzyVXIuDgxNN4f0KIs0sI");const d=h(),u=v(),o=i(""),l=i(""),a=i(""),p=async()=>{if(l.value===a.value){try{await u.register(o.value,l.value)}catch(r){console.log(r)}alert(`Hello ${o.value}, please confirm your email.`),d.push({name:"login"})}else alert("Passwords do not match!")};return(r,e)=>{const _=w("router-link");return f(),b("div",N,[s("div",k,[S,s("form",{onSubmit:I(p,["prevent"])},[s("div",C,[z,s("div",Z,[n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),class:"input",type:"email",placeholder:"E-mail"},null,512),[[c,o.value]])])]),s("div",J,[M,s("div",P,[n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),class:"input",type:"password",placeholder:"Password"},null,512),[[c,l.value]])])]),s("div",T,[U,s("div",B,[n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),class:"input",type:"password",placeholder:"Password confirmation"},null,512),[[c,a.value]])])]),X],40,V),s("div",j,[y(_,{to:{name:"login"}},{default:g(()=>[x("Already have an account? Login here")]),_:1})])])])}}};export{G as default};
