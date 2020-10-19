<script lang="ts">
  export let show = true;
  export let label: string;
  export let value: any = undefined;
  export let checked: boolean = false;
  export let multi: boolean = false;
  export let options: string[] = [];
  export let min: number | string | undefined = undefined;
  export let max: number | string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let step: number | string | undefined = undefined;
  export let required = true;
  export let type:
    | 'text'
    | 'textarea'
    | 'email'
    | 'number'
    | 'select'
    | 'date'
    // | 'radio'
    | 'checkbox' = 'text';
</script>

<!-- NOTE disabling label rule only because linter doesn't recognize that we DO have one -->
<!-- svelte-ignore a11y-label-has-associated-control -->
{#if show}
  {#if type === 'checkbox'}
    <label>
      <input type="checkbox" {required} bind:checked on:change />
      <span class={required ? 'required' : ''}>{label}</span>
    </label>
  {:else if type === 'radio'}
    <fieldset>
      <legend class={required ? 'required' : ''}>{label}</legend>
      <div class="radio-group">
        {#each options as option}
          <label class="group">
            <input
              type="radio"
              {required}
              bind:group={value}
              value={option}
              on:change />
            <span>{option}</span>
          </label>
        {/each}
      </div>
    </fieldset>
  {:else}
    <label>
      <span class={required ? 'required' : ''}>{label}</span>
      {#if type === 'text'}
        <input
          type="text"
          {placeholder}
          minlength={Number(min || 0) || undefined}
          maxlength={Number(max || 0) || undefined}
          {required}
          bind:value
          on:change />
      {:else if type === 'textarea'}
        <textarea
          {placeholder}
          minlength={Number(min || 0) || undefined}
          maxlength={Number(max || 0) || undefined}
          {required}
          bind:value
          on:change />
      {:else if type === 'email'}
        <input
          type="email"
          {placeholder}
          minlength={Number(min || 0) || undefined}
          maxlength={Number(max || 0) || undefined}
          {required}
          bind:value
          on:change />
      {:else if type === 'select'}
        {#if multi}
          <select multiple {required} bind:value on:blur>
            {#if !required}
              <option value="">(none)</option>
            {/if}
            {#each options as option}
              <option>{option}</option>
            {/each}
          </select>
        {:else}
          <select {required} bind:value on:blur>
            <option value="">{placeholder || 'Select...'}</option>
            {#each options as option}
              <option>{option}</option>
            {/each}
          </select>
        {/if}
      {:else if type === 'number'}
        <input
          type="number"
          {placeholder}
          {step}
          min={Number(min || 0) || undefined}
          max={Number(max || 0) || undefined}
          {required}
          bind:value
          on:change />
      {:else if type === 'date'}
        <input
          type="date"
          {placeholder}
          {min}
          {max}
          {required}
          bind:value
          on:change />
      {/if}
    </label>
  {/if}
{/if}

<style lang="postcss">
  /* legend {
    margin: 0;
    padding: 0;
    display: table;
  }
  fieldset {
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  }
  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  } */
  /* fieldset, */
  label {
    display: grid;
    grid-template-columns: minmax(10%, 30%) auto auto;
    gap: 0.5em;
    align-items: start;
    margin-top: 1em;
  }
  /* legend, */
  span {
    grid-column: 1/2;
    text-align: right;
    &.required::before {
      content: '*';
    }
  }
  input + span {
    grid-column: 3/4;
    text-align: left;
  }
  /* div.radio-group, */
  input,
  select,
  textarea {
    grid-column: 2/4;
  }
  input[type='checkbox'] {
    grid-column: 2/3;
  }
  /* div.radio-group {
    margin-top: -1rem;
  }
  div.radio-group label {
    display: block;
    margin: 0 0 0.5rem;
    padding: 9;
  }
  div.radio-group input,
  div.radio-group span {
    display: inline;
    grid-template-columns: none;
    grid-column: none;
  } */
</style>
