import{t,d as i,c as n,i as o}from"../../../solid-js.web.v1.1.7-349fbd17.js";const s=t('<div id="solid" class="counter"><h2>Solidjs EDIT</h2><button>-</button><pre></pre><button>+</button></div>');function c(){const[t,i]=n(0),c=()=>i(t()+1),e=()=>i(t()-1);return(()=>{const i=s.cloneNode(!0),n=i.firstChild.nextSibling,l=n.nextSibling,d=l.nextSibling;return n.$$click=e,o(l,t),d.$$click=c,i})()}i(["click"]);export{c as default};