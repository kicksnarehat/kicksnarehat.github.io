<script lang="ts">
  // import type { bind } from 'svelte/internal';
  import PageTitle from './components/PageTitle.svelte';
  // import Question from './components/Question/index.svelte';

  export let name: string = 'World';
  const data = {
    foo: 'foo',
    bar: 'bar',
    baz: true,
  };
</script>

<PageTitle title={`Hello ${name.toUpperCase()} Page`} />

<h2>CSS misc</h2>
<div class="wrap">
  <div>foo foo foo foo foo foo foo foo</div>
  <div>barasdfasdfasdf</div>
  <div>bazasdfasdf</div>
</div>

<!-- <form>
  <Question
    labelFor="foo"
    label="Foo"
    help="Help for foo. Help for foo. Help for foo. Help for foo."
    previous="previous foo"
    error="error foo">
    <input name="foo" type="text" bind:value={data.foo} />
  </Question>
  <Question labelFor="bar" label="Bar" error="error bar">
    <input name="bar" type="textarea" bind:value={data.bar} />
  </Question>
  <Question labelFor="baz" label="Baz">
    <input name="baz" type="checkbox" bind:checked={data.baz} />
  </Question>
</form> -->

<pre>
  {JSON.stringify({ data }, null, 2)}
</pre>

<style lang="postcss">
  h2 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }

  form {
    margin: 1rem 0;
  }
  .wrap {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 2fr 1fr;

    /* & :nth-child(1) {
      background-color: yellow;
    }
    & :nth-child(2) {
      background-color: green;
    }
    & :nth-child(3) {
      background-color: blue;
    } */
  }
  div + div {
    background: red;
  }
</style>
