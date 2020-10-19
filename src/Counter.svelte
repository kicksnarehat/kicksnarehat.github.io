<script lang="ts">
  import PageTitle from './components/PageTitle.svelte';
  let count = 0;
  $: squared = count ** 2;
  const handleClick = () => count++;
</script>

<PageTitle title="Simple Counter" />

<button on:click={handleClick}>Counter: {count}</button>
<p><em>Squared: {squared}</em></p>
