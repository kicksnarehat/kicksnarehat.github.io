import { writable } from 'svelte/store';

/* Stale-While-Revalidate pattern:
  - first fetch returns empty promise ("loading...")
  - async load method caches for key and updates store
  - subsequent requests immediately returns cache if found,
    and updates store with new async fetch results
*/

const cache = new Map();

function getData<T = any>(url: string) {
  const store = writable<Promise<T>>(new Promise(() => { }));

  if (cache.has(url)) {
    store.set(Promise.resolve(cache.get(url)));
  }

  const load = async () => {
    const resp = await fetch(url);
    const data = await resp.json() as T;
    cache.set(url, data);
    store.set(Promise.resolve(data));
  }

  load();
  return store;
};

export default getData;