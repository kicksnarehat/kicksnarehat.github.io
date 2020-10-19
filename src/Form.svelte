<script lang="ts">
  import Form from './components/Form.svelte';
  import Question from './components/Question.svelte';
  const today = new Date().toISOString().slice(0, 10);
  const initialValues = {
    firstname: 'hello',
    lastname: 'world',
    email: 'george@beatles.com',
    color: 'purple',
    beatles: ['George'],
    startdate: today,
    enddate: today,
    number1: 5,
    number2: null,
    agree: true,
    kinda: '',
    whynot: '',
  };
  let values = { ...initialValues };
  let savedValues: any = {};
  let submittedValues: any = {};

  function handleAgreeChange() {
    values.whynot = '';
  }
  function onReset() {
    values = { ...initialValues };
  }
  function onSave() {
    savedValues = { ...values };
  }
  function onSubmit() {
    submittedValues = { ...values };
    onReset();
  }
</script>

<Form {onSubmit} {onSave} {onReset}>
  <fieldset>
    <legend>Your Info</legend>
    <Question
      label="First Name"
      max="30"
      type="text"
      bind:value={values.firstname} />
    <Question
      label="Last Name With Long Label"
      min="2"
      bind:value={values.lastname} />
    <Question
      label="Email"
      placeholder="foo@bar.com"
      type="email"
      bind:value={values.email} />
    <!-- kinda was type="radio" -->
    <Question
      label="What say you?"
      type="select"
      options={['yes', 'no', 'maybe']}
      bind:value={values.kinda} />
    <Question
      label="Beatles"
      placeholder="Pick a few"
      multi
      type="select"
      options={['John', 'Paul', 'George', 'Ringo']}
      bind:value={values.beatles} />
    <Question
      label="Color"
      placeholder="Choose a favorite"
      type="select"
      options={['red', 'blue', 'green', 'yellow', 'orange', 'purple']}
      bind:value={values.color} />
    <Question
      label="Start Date"
      type="date"
      min={today}
      bind:value={values.startdate} />
    <Question
      label="End Date"
      type="date"
      min={values.startdate}
      bind:value={values.enddate} />
    <Question
      label="Number One"
      type="number"
      min="5"
      step="0.1"
      bind:value={values.number1} />
    <Question
      label="Number Two"
      type="number"
      min={values.number1}
      max={100 - values.number1}
      bind:value={values.number2}
      required={false} />
    <Question
      label="I agree to this very long hard-to-read and repetative condition. I
    agree to this very long hard-to-read and repetative condition. I agree
    to this very long hard-to-read and repetative condition. I agree to this
    very long hard-to-read and repetative condition. I agree to this very
    long hard-to-read and repetative condition."
      type="checkbox"
      bind:checked={values.agree}
      on:change={handleAgreeChange}
      required={false} />

    <Question
      show={!values.agree}
      label="Explain"
      type="textarea"
      bind:value={values.whynot} />
  </fieldset>
</Form>

<pre>
  {JSON.stringify({ values, savedValues, submittedValues }, null, 2)}
</pre>

<style lang="postcss">
  fieldset {
    margin-bottom: 1rem;
    padding: 0 1rem 1rem;
    border-color: #ccc;
    border-width: 0.05rem;
    border-radius: 0.35rem;
  }
  legend {
    margin-left: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  label {
    display: grid;
    grid-template-columns: minmax(10%, 30%) auto;
    gap: 0.5em;
    margin-top: 1em;
    & span {
      text-align: right;
      &::before {
        content: '*';
      }
      &::after {
        content: ':';
      }
    }
  }
  label.checkbox {
    grid-template-columns: minmax(10%, 30%) auto auto;
    & input {
      grid-column-start: 2;
    }
    & span {
      text-align: left;
      &::before {
        content: '*';
      }
      &::after {
        content: '';
      }
    }
  }
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
    background: red;
  }
  button[type='button'] {
    background: darkorange;
  }
  button[type='submit'] {
    background: blue;
  }
</style>
