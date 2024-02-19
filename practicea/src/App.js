
import "./App.css";
import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import Form from "./components/Form"
function App() {
  return (
    <div className="main bg-warning">
      <Navbar logo="Practice-A" />
      <div className="container ">
      <Form heading = "Enter The Text To Analyze Below" />
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
