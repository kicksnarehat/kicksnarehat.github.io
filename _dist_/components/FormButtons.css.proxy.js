
const code = ".buttonBar.svelte-1hc7q9y{text-align:center}button.svelte-1hc7q9y{color:#fff;border:none;border-radius:.3rem;padding:.5rem;font-size:large}button.svelte-1hc7q9y:hover{opacity:.7}button[type=reset].svelte-1hc7q9y{background:#e00}button[type=button].svelte-1hc7q9y{background:#008b00}button[type=submit].svelte-1hc7q9y{background:#00f}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);