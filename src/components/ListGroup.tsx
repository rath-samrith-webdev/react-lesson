import { useState } from "react";
function ListGroup() {
  const cities = ["New York", "LA", "Tokyo"];

  /**
   * 
   * @useState is a React Hook that lets you add a state variable to your component. 
   * const [state, setState] = useState(initialState) useState(initialState) set functions, like 
   * setSomething(nextState)
   */
  // hook
  const [selecedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-primary text-center">List Group</h1>
      <div className="container">
        <ul className="list-group">
          {cities.map((item, index) => (
            <li
              className={
                selecedIndex === index
                  ? "list-group-item active"
                  : "list-group-item "
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListGroup;
