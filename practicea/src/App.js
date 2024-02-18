import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <div className="main">
      <Navbar logo="Practice-A" />
      <Card
        title="Burger"
        imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Big-double-cheeseburger-f437c9c.jpg?quality=90&resize=556,505"
        description="This is a Burger component in React.js"
      />
    </div>
  );
}

export default App;
