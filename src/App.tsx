import { useState } from "react";
import Form from "./components/Form.tsx";
import Table from "./components/Table.tsx";
import Select from "./components/Select.tsx";
import { FieldValues } from "react-hook-form";
function App() {
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
    setExpenseList(expenseList.filter((item) => item.description !== id));
  };
  const submitForm = (data: FieldValues) => {
    const nextList = [
      ...expenseList,
      {
        description: data.description,
        price: data.price,
        category: data.category,
      },
    ];
    setExpenseList(nextList);
  };
  const [filtered, setFiltered] = useState("All");
  const filterItem = (cate: string) => {
    setFiltered(cate);
  };
  const filteredList =
    filtered === "All"
      ? expenseList
      : expenseList.filter(({ category }) => category === filtered);
  return (
    <>
      <Form formSubmission={(data: FieldValues) => submitForm(data)} />
      <Select filter={filterItem} />
      <div className="mt-2">
        <Table items={filteredList} onDelete={remove} />
      </div>
    </>
  );
}

export default App;
