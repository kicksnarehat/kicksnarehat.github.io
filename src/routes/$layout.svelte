<script>
  import Nav from '$components/Nav.svelte';
</script>

<header>
  <Nav />
</header>
<main>
  <slot />
</main>
<footer>
  <p>I am the footer</p>
</footer>

<style>
  :global(body) {
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  :global(main a) {
    color: rgb(0, 100, 200);
  }
  :global(main a:visited) {
    color: rgb(0, 80, 160);
  }
  :global(main a:hover) {
  }

  main {
    margin: 1rem 3rem;
  }

  footer {
    border-top: 1px solid #ccc;
    padding: 0 3rem;
  }
</style>
