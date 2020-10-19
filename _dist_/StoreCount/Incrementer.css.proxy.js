
const code = "button.svelte-1rh7wly{display:inline-block;margin:0 .5em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);