
const code = "section.svelte-r5qy1h.svelte-r5qy1h{border:1px solid #e2dbdb;border-radius:.375rem;overflow:hidden;margin:1em 0;width:100%}header.svelte-r5qy1h.svelte-r5qy1h{display:flex;border-bottom:1px solid #e2dbdb;background-color:#f2f2f2}header.svelte-r5qy1h .svelte-r5qy1h{color:#444;font-size:large;font-weight:500;margin:.5em .5em .5em 1em}.content.svelte-r5qy1h.svelte-r5qy1h{width:100%;padding:1em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);