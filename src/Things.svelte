<script lang="ts">
  import PageTitle from './components/PageTitle.svelte';
  export let thing1: string;
  export let thing2: string;
</script>

<PageTitle title="Things" />
<h2>I am {thing1}</h2>
<h2>I am {thing2}</h2>
