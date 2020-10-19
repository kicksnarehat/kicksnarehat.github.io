<script lang="ts">
  export let onSave: () => void;
</script>

<div class="buttonBar">
  <button type="reset">Reset</button>
  <button type="button" on:click={onSave}>Save</button>
  <button type="submit">Submit</button>
</div>

<style lang="postcss">
  .buttonBar {
    text-align: center;
  }
  button {
    color: white;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
    font-size: large;
    &:hover {
      opacity: 0.7;
    }
  }
  button[type='reset'] {
    background: #e00;
  }
  button[type='button'] {
    background: #008b00;
  }
  button[type='submit'] {
    background: blue;
  }
</style>
