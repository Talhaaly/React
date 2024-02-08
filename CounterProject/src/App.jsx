import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  // IncreaseValue Function
  const increaseValue = () => {
    setCount(count + 1)
    if (count >= 10) {
      setCount(count = count)

    }
  }
  // resetValue Function
  const resetValue = () => {
    setCount(count = 0)

  }
  //decreaseValue Function
  const decreaseValue = () => {
    setCount(count - 1)
    if (count <= 0) {
      setCount(count = count)
    }
  }
  return (
    <>
      <h1>Counter value <span>{count}</span></h1>
      <button style={{ marginLeft: "30px", backgroundColor: "blue" }}
        onClick={increaseValue}>Increase Value</button>
      <button style={{ marginLeft: "30px", backgroundColor: "grey" }}
        onClick={resetValue}>Reset value</button>
      <button style={{ marginLeft: "30px", backgroundColor: "red" }}
        onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
