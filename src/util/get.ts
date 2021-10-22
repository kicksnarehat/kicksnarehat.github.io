import { writable } from 'svelte/store'

/* Stale-While-Revalidate pattern:
  - first fetch returns empty promise ("loading...")
  - async load method caches for key and updates store
  - subsequent requests immediately returns cache if found,
    and updates store with new async fetch results
*/

const getDataCache = new Map<string, unknown>()
export function getData<T>(url: string) {
  const store = writable<Promise<T>>(new Promise(() => {}))

  if (getDataCache.has(url)) {
    store.set(Promise.resolve(getDataCache.get(url) as T))
  }

  const load = async () => {
    try {
      const resp = await window?.fetch(url)
      const data = await resp.json()
      getDataCache.set(url, data)
      store.set(Promise.resolve(data))
    } catch (err) {
      console.log(err)
    }
  }

  load()
  return store
}

export function get(obj: any, path: string, defaultValue = undefined) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      )
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}
