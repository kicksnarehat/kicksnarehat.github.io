import{S as t,i as s,s as a,o as e,p as n,q as r,u as o,j as c,v as $,w as f,x as l,y as p,z as i,f as m,A as u,B as d,C as _,D as g,e as h,c as v,b as x,n as w}from"../../svelte.internal.v3.44.0-1363588d.js";function y(t){let s,a=t[1]&&function(t){let s;return{c(){s=h("astro-fragment")},l(t){s=v(t,"ASTRO-FRAGMENT",{}),x(s).forEach(m)},m(a,e){c(a,s,e),s.innerHTML=t[1]},p:w,d(t){t&&m(s)}}}(t);return{c(){a&&a.c(),s=n()},l(t){a&&a.l(t),s=n()},m(t,e){a&&a.m(t,e),c(t,s,e)},p(t,s){t[1]&&a.p(t,s)},d(t){a&&a.d(t),t&&m(s)}}}function A(t){let s,a,_;const h=[t[2]];var v=t[0];function x(t){let s={$$slots:{default:[y]},$$scope:{ctx:t}};for(let t=0;t<h.length;t+=1)s=d(s,h[t]);return{props:s}}return v&&(s=new v(x(t))),{c(){s&&e(s.$$.fragment),a=n()},l(t){s&&r(s.$$.fragment,t),a=n()},m(t,e){s&&o(s,t,e),c(t,a,e),_=!0},p(t,[n]){const r=4&n?$(h,[f(t[2])]):{};if(16&n&&(r.$$scope={dirty:n,ctx:t}),v!==(v=t[0])){if(s){g();const t=s;l(t.$$.fragment,1,0,(()=>{u(t,1)})),p()}v?(s=new v(x(t)),e(s.$$.fragment),i(s.$$.fragment,1),o(s,a.parentNode,a)):s=null}else v&&s.$set(r)},i(t){_||(s&&i(s.$$.fragment,t),_=!0)},o(t){s&&l(s.$$.fragment,t),_=!1},d(t){t&&m(a),s&&u(s,t)}}}function T(t,s,a){const{__astro_component:e,__astro_children:n,...r}=s;return t.$$set=t=>{a(3,s=d(d({},s),_(t)))},s=_(s),[e,n,r]}class j extends t{constructor(t){super(),s(this,t,T,A,a,{})}}var E=t=>(s,a,e)=>{try{new j({target:t,props:{__astro_component:s,__astro_children:e,...a},hydrate:!0})}catch(t){}};export{E as default};