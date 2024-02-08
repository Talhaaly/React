import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button onClick={() => setColor('red')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "red", color: "wheat" }}>Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "green", color: "wheat" }}>green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "blue", color: "wheat" }}>blue</button>
          <button onClick={() => setColor('yellow')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}>orange</button>
          <button onClick={() => setColor('pink')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "pink" }}>pink</button>
          <button onClick={() => setColor('black')} className="outline-none px-4 rounded-full shadow-lg "
            style={{ backgroundColor: "black", color: "wheat" }}>black</button>
          <button onClick={() => setColor('lavender')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "lavender" }}>lavender</button>
          <button onClick={() => setColor('purple')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "purple", color: "wheat" }}>purple</button>
          <button onClick={() => setColor('brown')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "brown", color: "wheat" }}>brown</button>
          <button onClick={() => setColor('grey')} className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "grey" }}>grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
