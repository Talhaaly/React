import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const myObj = {
  userName: "Talha Ali"
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName= "Natalia" btnText = "Visit me" />
    </>
  )
}

export default App
