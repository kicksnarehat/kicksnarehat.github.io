import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => setCounter(c => c + 1);

  return (
    <button style={{
      fontSize: '3rem',
      borderRadius: '.5rem',
      padding: '.5rem',
      border: 'none',
      color: 'white',
      background: 'black'

    }} onClick={increment}>Counter: {counter}</button>
  )
}

export default Counter;