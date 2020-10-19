<script>
  export let title = 'Default Title';
</script>

<section>
  <header>
    <h2>{title}</h2>
    <slot name="headerXtra" />
  </header>
  <div class="content">
    <slot>Default slot content</slot>
  </div>
  <slot name="footer">
    <div class="footer">
      <slot name="footer" />
    </div>
  </slot>
</section>

<style>
  section {
    border: 1px solid rgb(226, 219, 219);
    border-radius: 0.375rem;
    overflow: hidden;
    margin: 1em 0;
    width: 100%;
  }
  header {
    display: flex;
    border-bottom: 1px solid rgb(226, 219, 219);
    background-color: #f2f2f2;
  }
  header * {
    color: #444;
    font-size: large;
    font-weight: 500;
    margin: 0.5em 0.5em 0.5em 1em;
  }
  .content {
    width: 100%;
    padding: 1em;
  }
</style>
