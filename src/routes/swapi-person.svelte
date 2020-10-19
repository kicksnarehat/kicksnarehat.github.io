<script>
  import { getData } from '../components/Helpers.svelte';
  import PageTitle from '../components/PageTitle.svelte';

  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  let randomNumber = getRandomNumber();

  let data = getData(`https://swapi.dev/api/people/${randomNumber}/`);

  const onClick = () => {
    randomNumber = getRandomNumber();
    data = getData(`https://swapi.dev/api/people/${randomNumber}/`);
  };
</script>

<PageTitle title="Random SWAPI Person" />
<button on:click={onClick} disabled={!$data}>Reload random Star Wars character</button>
{#await $data}
  <p>Loading...</p>
{:then { name, birth_year }}
  <p class="character">{name} (birth year: {birth_year})</p>
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
</style>
