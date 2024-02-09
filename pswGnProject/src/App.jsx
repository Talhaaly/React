import { useState , useCallback} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  // Password Generator Method 
  const pswdGenerator = useCallback(()=> {
    let pass = " "
    let str = ""
  } , [length,numAllowed,charAllowed,setPassword])
    
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
