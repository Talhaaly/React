import { useState, useCallback } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  // Password Generator Method 
  const pswdGenerator = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "-_=+{}[]()'<>/?*&^%$#@!:|`"
    for (let i = 1; i <= array.length; i++) {
      let char = Mathfloor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
       text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white'>
          Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer' 
              onChange={(e)=> {setLength(e.target.value)}}
              />
              <label>length:{length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
