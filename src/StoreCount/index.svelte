<script>
  import store from './store';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import PageTitle from '../components/PageTitle.svelte';
</script>

<PageTitle title="Counter Using Store" />

<Decrementer />
<span>StoreCount: {$store}</span>
<Incrementer />
