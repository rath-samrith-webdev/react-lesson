// TODO: the components in Reacts Declare using functions.
// TODO: In react using className instead of class
// TODO: "<></>" This is the shortcut for  <Fractments></Fractments>  It is used when we want to use multiple elements
/*
Note: That each react'
Components can return only one element at a time.
*/
// NOTED: Each Components contains the HTML tags as well as

function ListGroup() {
  return (
    <>
      <h1 className="text-primary">List Group</h1>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </>
  );
}
export default ListGroup;
