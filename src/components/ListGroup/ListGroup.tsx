import { useState } from "react";
import "./ListGroup.css";
interface ItemsProp {
  items: string[];
}
function ListGroup({ items }: ItemsProp) {
  const [selectedInd, setIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setIndex(index)}
            className={
              selectedInd === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
