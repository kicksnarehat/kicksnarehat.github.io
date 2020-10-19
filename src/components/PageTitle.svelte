<script>
  export let title = 'Undefined Page Title';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<h1>{title}</h1>

<style>
  h1 {
    margin: 0 auto 1em;
    font-size: x-large;
    font-weight: 400;
    color: rgb(76, 81, 88);
    border-bottom: 1px solid rgb(210, 217, 223);
  }
</style>
