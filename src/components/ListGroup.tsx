import { MouseEvent } from "react";
function ListGroup() {
  const cities = ["New York", "LA", "Tokyo"];

  /**
   * @function handleClick is an event handler
   * @param e 
   * @returns 
   */
  const handleClick = (e: MouseEvent) => console.log("clicked", e);
  return (
    <>
      <h1 className="text-primary text-center">List Group</h1>
      <div className="container">
        <ul className="list-group">
          {cities.map((item) => (
            <li className="list-group-item" key={item} onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListGroup;
