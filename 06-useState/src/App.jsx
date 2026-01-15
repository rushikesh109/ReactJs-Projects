import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const increase = () => {
    setNum(num+1);
  }
  const decrease =() => {
    if(num>0)
    setNum(num-1)
  }

  const increaseBy5 = () => {
    setNum(num+5);}

    const decreaseBy5 = () => {
      if(num>0)
      setNum(num - 5);
    }

  return (
    <div>
      <h1>Count {num} </h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increaseBy5}>Increase by 5</button>
      <button onClick={decreaseBy5}>Decrease by 5</button>
    </div>
  )
}

export default App
