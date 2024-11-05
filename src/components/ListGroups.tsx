import { useState } from "react";

/**
 *
 * the interface @ListProps is pre-define in order to prevent errors and we use interface to define the shape of our data @prop
 */

interface ListProps {
  items: string[];
  heading: string;
  onSelectedItem: (items: string) => void;
}

/**
 *
 * @param {items,heading,onSelectedItem}:ListProps
 * @item is the type of @stringArray
 * @heading is the type of @string
 * @onSelectedItem is a functions that @returns void
 * @returns react elements
 */
function ListGroup({ items, heading, onSelectedItem }: ListProps) {
  const [selecedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-primary text-center">{heading}</h1>
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
                onSelectedItem(item); /**This is the props functions */
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
