import { useState } from "react";

/**
 *
 * the interface @ListProps is pre-define in order to prevent errors and we use interface to define the shape of our data @prop
 */

interface ListProps {
  items: string[];
}

/**
 *
 * @param {items}
 * @returns react elements
 */
function ListGroupFTProps({ items }: ListProps) {
  const [selecedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-primary text-center">List Group</h1>
      <div className="container">
        <ul className="list-group">
          {items.map((item, index) => (
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

export default ListGroupFTProps;
