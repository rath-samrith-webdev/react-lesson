import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Test", "Test1"];
  return (
    <>
      <ListGroup items={items} />
    </>
  );
}

export default App;
