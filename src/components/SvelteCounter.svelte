<script>
  let count = 0
  const add = () => ++count
  const subtract = () => --count
</script>

<div id="svelte" class="counter">
  <h2>Svelte</h2>
  <button on:click={subtract}>-</button>
  <span>{count}</span>
  <button on:click={add}>+</button>
</div>

<style lang="postcss">
  h2 {
    color: green;
    text-transform: uppercase;
  }
  h2:hover {
    color: red;
  }
  button {
    border-radius: 1rem;
  }
</style>
