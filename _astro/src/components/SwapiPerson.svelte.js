import{S as e,i as t,s as a,o as r,e as s,t as o,a as n,p as c,c as l,b as i,d,f as h,g as u,h as p,j as m,k as f,l as b,u as v,n as x,q as w,m as g}from"../../../svelte.internal.v3.44.0-5487c402.js";import{w as y}from"../../../svelte.store.v3.44.0-7ad9632c.js";if("undefined"!=typeof document){const e=".character.svelte-185wxex{color:rgb(109, 53, 109);font-size:large;font-weight:600;margin:1rem 0}button.svelte-185wxex{margin:1rem;padding:0.5rem 1rem;border-radius:0.8rem;border:1px solid #ccc;box-shadow:none}button.svelte-185wxex:hover{color:white;background:black}",t=document.createElement("style"),a=document.createTextNode(e);t.type="text/css",t.appendChild(a),document.head.appendChild(t)}const k=new Map;function E(e){let t,a;return{c(){t=s("p"),a=o("Oops! Error!")},l(e){t=l(e,"P",{});var r=i(t);a=d(r,"Oops! Error!"),r.forEach(h)},m(e,r){m(e,t,r),f(t,a)},p:x,d(e){e&&h(t)}}}function P(e){let t,a,r,c,b,v,x,w,y=e[4].name+"",k=e[4].birth_year+"",E=JSON.stringify(e[4],null,2)+"";return{c(){t=s("p"),a=o(y),r=o(" (birth year: "),c=o(k),b=o(")"),v=n(),x=s("pre"),w=o(E),this.h()},l(e){t=l(e,"P",{class:!0});var s=i(t);a=d(s,y),r=d(s," (birth year: "),c=d(s,k),b=d(s,")"),s.forEach(h),v=u(e),x=l(e,"PRE",{});var o=i(x);w=d(o,E),o.forEach(h),this.h()},h(){p(t,"class","character svelte-185wxex")},m(e,s){m(e,t,s),f(t,a),f(t,r),f(t,c),f(t,b),m(e,v,s),m(e,x,s),f(x,w)},p(e,t){2&t&&y!==(y=e[4].name+"")&&g(a,y),2&t&&k!==(k=e[4].birth_year+"")&&g(c,k),2&t&&E!==(E=JSON.stringify(e[4],null,2)+"")&&g(w,E)},d(e){e&&h(t),e&&h(v),e&&h(x)}}}function N(e){let t,a;return{c(){t=s("p"),a=o("Loading...")},l(e){t=l(e,"P",{});var r=i(t);a=d(r,"Loading..."),r.forEach(h)},m(e,r){m(e,t,r),f(t,a)},p:x,d(e){e&&h(t)}}}function O(e){let t,a,w,g,y,k,O,j,C={ctx:e,current:null,token:null,hasCatch:!0,pending:N,then:P,catch:E,value:4};return r(k=e[1],C),{c(){t=s("button"),a=o("Reload"),g=n(),y=c(),C.block.c(),this.h()},l(e){t=l(e,"BUTTON",{class:!0});var r=i(t);a=d(r,"Reload"),r.forEach(h),g=u(e),y=c(),C.block.l(e),this.h()},h(){t.disabled=w=!e[1],p(t,"class","svelte-185wxex")},m(r,s){m(r,t,s),f(t,a),m(r,g,s),m(r,y,s),C.block.m(r,C.anchor=s),C.mount=()=>y.parentNode,C.anchor=y,O||(j=b(t,"click",e[2]),O=!0)},p(a,[s]){e=a,2&s&&w!==(w=!e[1])&&(t.disabled=w),C.ctx=e,2&s&&k!==(k=e[1])&&r(k,C)||v(C,e,s)},i:x,o:x,d(e){e&&h(t),e&&h(g),e&&h(y),C.block.d(e),C.token=null,C=null,O=!1,j()}}}function j(e,t,a){let r,s=x,o=()=>(s(),s=w(c,(e=>a(1,r=e))),c);function n(){return function(e){const t=y(new Promise((()=>{})));return k.has(e)&&t.set(Promise.resolve(k.get(e))),(async()=>{try{const a=await(window?.fetch(e)),r=await a.json();k.set(e,r),t.set(Promise.resolve(r))}catch(e){console.log(e)}})(),t}(`https://swapi.dev/api/people/${Math.floor(10*Math.random())+1}/`)}e.$$.on_destroy.push((()=>s()));let c=n();o();return[c,r,()=>{o(a(0,c=n()))}]}class C extends e{constructor(e){super(),t(this,e,j,O,a,{})}}export{C as default};
