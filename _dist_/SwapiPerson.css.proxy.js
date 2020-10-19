
const code = ".character.svelte-vt0f7u{color:#6d356d;font-size:large;font-weight:600;margin:1rem 0}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);