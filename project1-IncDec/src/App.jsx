import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countSetTo, setCountSetto] = useState(0);

  return (
    <>
     <h1>Counter is {count}</h1>
     <div className='card'> Count is {count}</div>
     <div>
      <button onClick={() => setCount(count + 1)} style={{margin: "0 5px"}}>
       Increse
       </button>
      <button onClick= {() => setCount((count) => Math.max(count - 1, 0))} style={{ margin: "0 5px"}}>
        Decrease
        </button>
        <button onClick={() => setCount(() => 0)} style={{margin: "0 5px"}}>
          Reset
        </button>
     </div>

     <div style={{margin:"20px 0"}}>
      <input
      style={{
        width: "100px",
        border: "1px solid white",
        margin: "0 5px",
        padding: "0.6em 1.2em",
      }}
      value={countSetTo}
      onChange={(e) => setCountSetto(Number(e.target.value))}
      type='text'
      />
      <button style={{margin: "0 5px"}}
      onClick={() => {
        setCount(Number(countSetTo));
        setCountSetto(0)
      }}>
        Set to {countSetTo}
      </button>
     </div>
    </>
  )
}

export default App
