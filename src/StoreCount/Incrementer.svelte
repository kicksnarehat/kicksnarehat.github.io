<script lang="ts">
  import store from './store';

  function increment() {
    store.update((n) => n + 1);
  }
</script>

<button on:click={increment}>+</button>

<style lang="postcss">
  button {
    display: inline-block;
    margin: 0 0.5em;
  }
</style>
