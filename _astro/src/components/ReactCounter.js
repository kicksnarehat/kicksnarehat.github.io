import{c as r,r as e,u as t}from"../../../react.v17.0.2-21c88e64.js";var n=r((function(r,t){var n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),t.Fragment=o("react.fragment")}var a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function i(r,e,t){var o,i={},l=null,s=null;for(o in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(s=e.ref),e)c.call(e,o)&&!f.hasOwnProperty(o)&&(i[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===i[o]&&(i[o]=e[o]);return{$$typeof:n,type:r,key:l,ref:s,props:i,_owner:a.current}}t.jsx=i,t.jsxs=i})),o=r((function(r){r.exports=n}));o.Fragment;var a=o.jsx,c=o.jsxs;function f(){const[r,e]=t(0);return c("div",{id:"react",className:"counter",children:[a("h2",{children:"React"}),a("button",{onClick:()=>e((r=>r-1)),children:"-"}),a("pre",{children:r}),a("button",{onClick:()=>e((r=>r+1)),children:"+"})]})}export{f as default};