import { createSignal } from 'solid-js'

export default function SolidCounter() {
  const [count, setCount] = createSignal(0)
  const add = () => setCount(count() + 1)
  const subtract = () => setCount(count() - 1)

  return (
    <div id="solid" class="counter">
      <h2>Solidjs EDIT</h2>
      <button onClick={subtract}>-</button>
      <pre>{count()}</pre>
      <button onClick={add}>+</button>
    </div>
  )
}
