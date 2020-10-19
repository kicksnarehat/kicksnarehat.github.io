<script lang="ts">
  import FormButtons from './FormButtons.svelte';
  export let onSubmit: () => void;
  export let onSave: () => void;
  export let onReset: () => void;
</script>

<form on:submit|preventDefault={onSubmit} on:reset|preventDefault={onReset}>
  <slot />
  <FormButtons {onSave} />
</form>
