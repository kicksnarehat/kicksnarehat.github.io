
const code = "h1.svelte-4hx6cf{margin:0 auto 1em;font-size:x-large;font-weight:400;color:#4c5158;border-bottom:1px solid #d2d9df}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);