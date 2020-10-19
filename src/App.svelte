<script lang="ts">
  import Routes from './Routes.svelte';
  import SiteNav from './SiteNav.svelte';
  import 'minireset.css';
</script>

<header>
  <SiteNav />
</header>
<main>
  <Routes />
</main>
<footer>
  <p>I am the footer</p>
</footer>

<style lang="postcss" global>
  body {
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  main {
    margin: 1rem 3rem;
  }
  footer {
    border-top: 1px solid #ccc;
    padding: 0 3rem;
  }
  main,
  footer {
    & a {
      color: rgb(0, 100, 200);
    }

    & a:hover {
      /* color: ; */
    }

    & a:visited {
      color: rgb(0, 80, 160);
    }
  }
</style>
