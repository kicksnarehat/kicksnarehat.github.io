function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}let s,u=!1;function f(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function d(t,n){if(u){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const c=n[t].claim_order,i=(r>0&&n[e[r]].claim_order<=c?r+1:f(1,r,(t=>n[e[t]].claim_order),c))-1;o[t]=e[i]+1;const l=i+1;e[l]=t,r=Math.max(l,r)}const c=[],i=[];let l=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(c.push(n[t-1]);l>=t;l--)i.push(n[l]);l--}for(;l>=0;l--)i.push(n[l]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<c.length&&i[n].claim_order>=c[e].claim_order;)e++;const o=e<c.length?c[e]:null;t.insertBefore(i[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function h(t,n,e){u&&!e?d(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function b(){return p("")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function y(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function k(t,n,e){return function(t,n,e,o){return y(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,m)}function E(t,n){return y(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>p(n)),!0)}function w(t){return E(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function N(t){s=t}const S=[],j=[],C=[],B=[],T=Promise.resolve();let O=!1;function q(t){C.push(t)}let z=!1;const D=new Set;function F(){if(!z){z=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];N(n),I(n.$$)}for(N(null),S.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];D.has(n)||(D.add(n),n())}C.length=0}while(S.length);for(;B.length;)B.pop()();O=!1,z=!1,D.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const L=new Set;let M;function G(){M={r:0,c:[],p:M}}function H(){M.r||r(M.c),M=M.p}function P(t,n){t&&t.i&&(L.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const l=t&&(n.current=t)(i);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(G(),W(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),H())})):n.block.d(1),l.c(),P(l,1),l.m(n.mount(),n.anchor),a=!0),n.block=l,n.blocks&&(n.blocks[o]=l),a&&F()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=function(){if(!s)throw new Error("Function called outside component initialization");return s}();if(t.then((t=>{N(e),o(n.then,1,n.value,t),N(null)}),(t=>{if(N(e),o(n.catch,2,n.error,t),N(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function K(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}function Q(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],l=n[c];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[c]=l}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function R(t){return"object"==typeof t&&null!==t?t:{}}function U(t){t&&t.c()}function V(t,n){t&&t.l(n)}function X(t,n,o,i){const{fragment:l,on_mount:a,on_destroy:s,after_update:u}=t.$$;l&&l.m(n,o),i||q((()=>{const n=a.map(e).filter(c);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(q)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(S.push(t),O||(O=!0,T.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,i,l,a,f,d=[-1]){const h=s;N(n);const m=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:e.target||h.$$.root};f&&f(m.root);let p=!1;if(m.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&Z(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!i&&i(m.ctx),e.target){if(e.hydrate){u=!0;const t=v(e.target);m.fragment&&m.fragment.l(t),t.forEach(_)}else m.fragment&&m.fragment.c();e.intro&&P(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),u=!1,F()}N(h)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{W as A,H as B,P as C,Y as D,n as E,a as F,G,nt as S,g as a,b,k as c,v as d,m as e,E as f,_ as g,J as h,tt as i,w as j,x as k,h as l,d as m,t as n,$ as o,l as p,A as q,r,i as s,p as t,K as u,U as v,V as w,X as x,Q as y,R as z};
