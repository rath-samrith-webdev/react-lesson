import { useState } from "react";
import Like from "../Like";
import UpdateObj from "../UpdatingObject";
import ArrayObjects from "../UpdateArrayObj";
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
                ? "list-group-item d-flex align-items-center justify-content-between active"
                : "list-group-item d-flex align-items-center justify-content-between"
            }
          >
            {item}
              <UpdateObj />
              <ArrayObjects />
            <Like isClicked={false} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
