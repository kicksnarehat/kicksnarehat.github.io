<script lang="ts">
  import { onMount } from 'svelte'
  import type { Writable } from 'svelte/store'
  import { getData } from '../util/get'
  interface SwapiPerson {
    name: string
    birth_year: string
  }
  let data: Writable<Promise<SwapiPerson>>
  function setData() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    data = getData<SwapiPerson>(`https://swapi.dev/api/people/${randomNumber}/`)
  }
  onMount(setData)
</script>

<button on:click={setData} disabled={!$data}>Reload</button>
{#await $data}
  <p>Loading...</p>
{:then person}
  <p class="character">{person?.name} (birth year: {person?.birth_year})</p>
  <pre>{JSON.stringify(person, null, 2)}</pre>
{:catch}
  <p>Oops! Error!</p>
{/await}

<style>
  .character {
    color: rgb(109, 53, 109);
    font-size: large;
    font-weight: 600;
    margin: 1rem 0;
  }
  button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    border: 1px solid #ccc;
    box-shadow: none;
  }
  button:hover {
    color: white;
    background: black;
  }
</style>
