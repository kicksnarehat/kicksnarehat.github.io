<script lang="ts">
  import getData from './fetcher';
  import PageTitle from './components/PageTitle.svelte';

  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  interface SwapiPerson {
    name: string;
    birth_year: string;
  }
  let randomNumber = getRandomNumber();

  let data = getData<SwapiPerson>(
    `https://swapi.dev/api/people/${randomNumber}/`
  );

  const onClick = () => {
    randomNumber = getRandomNumber();
    data = getData<SwapiPerson>(
      `https://swapi.dev/api/people/${randomNumber}/`
    );
  };
</script>

<PageTitle title="Random SWAPI Person" />

<button on:click={onClick} disabled={!$data}>Reload random Star Wars character</button>

{#await $data}
  <p>Loading...</p>
{:then swapi}
  <p class="character">{swapi.name} (birth year: {swapi.birth_year})</p>
{:catch}
  <p>Oops! Error!</p>
{/await}

<style>
  .error {
    color: red;
  }
  .character {
    color: rgb(109, 53, 109);
    font-size: large;
    font-weight: 600;
    margin: 1rem 0;
  }
</style>
