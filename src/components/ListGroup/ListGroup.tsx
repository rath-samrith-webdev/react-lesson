import { useState } from "react";
import styles from "./ListGroup.module.css";
interface ItemsProp {
  items: string[];
}
function ListGroup({ items }: ItemsProp) {
  const [selectedInd, setIndex] = useState(-1);
  return (
    <>
      <ul className={styles["list-style"]}>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setIndex(index)}
            className={
              selectedInd === index
                ? [styles.listGroupItem, styles.active].join(" ")
                : styles.listGroupItem
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
