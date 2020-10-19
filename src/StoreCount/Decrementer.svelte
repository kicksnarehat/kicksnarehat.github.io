<script lang="ts">
  import store from './store';

  function decrement() {
    store.update((n) => n - 1);
  }
</script>

<button on:click={decrement}>-</button>

<style lang="postcss">
  button {
    display: inline-block;
    margin: 0 0.5em;
  }
</style>
