<script context="module">
  import { writable } from 'svelte/store';

  /* Stale-While-Revalidate pattern:
  - first fetch returns empty promise ("loading...")
  - async load method caches for key and updates store
  - subsequent requests immediately returns cache if found,
    and updates store with new async fetch results
*/

  const getDataCache = new Map();
  export function getData(url) {
    const store = writable(new Promise(() => {}));

    if (getDataCache.has(url)) {
      store.set(Promise.resolve(getDataCache.get(url)));
    }

    const load = async () => {
      try {
        const resp = await window?.fetch(url);
        const data = await resp.json();
        getDataCache.set(url, data);
        store.set(Promise.resolve(data));
      } catch (err) {
        console.log(err);
      }
    };

    load();
    return store;
  }

  export function get(obj, path, defaultValue = undefined) {
    const travel = (regexp) =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce(
          (res, key) => (res !== null && res !== undefined ? res[key] : res),
          obj
        );
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
  }
</script>
