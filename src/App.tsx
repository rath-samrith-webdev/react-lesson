import "./App.css";
import ListGroup from "./components/ListGroup";
import UpdateObj from "./components/UpdatingObject";

function App() {
  const items = ["Test", "Test1"];
  return (
    <>
        <UpdateObj/>
      <ListGroup items={items} />
    </>
  );
}

export default App;
