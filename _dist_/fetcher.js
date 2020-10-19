import {writable} from "../web_modules/svelte/store.js";
const cache = new Map();
function getData(url) {
  const store2 = writable(new Promise(() => {
  }));
  if (cache.has(url)) {
    store2.set(Promise.resolve(cache.get(url)));
  }
  const load = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    cache.set(url, data);
    store2.set(Promise.resolve(data));
  };
  load();
  return store2;
}
;
export default getData;
