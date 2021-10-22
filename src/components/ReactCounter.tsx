import { useState } from 'react';

export default function ReactCounter() {
  const [count, setCount] = useState(0);
  const add = () => setCount((i:number) => i + 1);
  const subtract = () => setCount((i:number) => i - 1);

  return (
    <div id="react" className="counter">
      <h2>React</h2>
      <button onClick={subtract}>-</button>
      <pre>{count}</pre>
      <button onClick={add}>+</button>
    </div>
  );
}
