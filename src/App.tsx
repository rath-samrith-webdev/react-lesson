import { useState } from "react";
import Form from "./components/Form.tsx";
import Table from "./components/Table.tsx";
import Select from "./components/Select.tsx";
function App() {
  const [expense] = useState({
    description: "",
    price: 10,
    category: "",
  });
  const [expenseList, setExpenseList] = useState([
    {
      description: "Test",
      price: 100,
      category: "Groceries",
    },
    {
      description: "Test1",
      price: 100,
      category: "Utilise",
    },
  ]);

  const remove = (id: string) => {
    console.log(id);
    console.log(expenseList.filter((item) => item.description !== id));

    setExpenseList(expenseList.filter((item) => item.description !== id));
  };
  const submitForm = () => {
    const nextList = [...expenseList, expense];
    console.log(nextList);
  };
  const filterItem = (cate: string) => {
    console.log(cate);
  };
  return (
    <>
      <Form expense={expense} formSubmission={submitForm} />
      <Select filter={filterItem} />
      <div className="mt-2">
        <Table items={expenseList} onDelete={remove} />
      </div>
    </>
  );
}

export default App;
