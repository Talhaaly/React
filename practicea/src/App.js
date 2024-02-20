
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import Form from "./components/Form"
import { useState } from "react";



function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#051937'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div className="main ">
    <Navbar logo="Practice-A" mode = {mode} toggleMode = {toggleMode} />
      {/* <About/> */}
      <div className="container ">
      <Form heading = "Enter The Text To Analyze Below" mode = {mode}/>
      </div>
      {/* <Card
        title="Burger"
        imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Big-double-cheeseburger-f437c9c.jpg?quality=90&resize=556,505"
        description="This is a Burger component in React.js"
      /> */}
    </div>
  );
}

export default App;
