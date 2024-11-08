import "./App.css";
import ListGroup from "./components/ListGroup";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [items,setItems] = useState(["Test", "Test1"]);
  return (
    <>
      <ListGroup items={items} />
      <Cart items={items} onClear={() => setItems([])} />
    </>
  );
}

export default App;
