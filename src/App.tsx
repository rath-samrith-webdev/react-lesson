import { useState } from "react";
import ProductList from "./component/ProductList.tsx";
import Form from "./Form.tsx";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <Form />
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="clothing">clothing</option>
        <option value="house hold">House Hold</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
