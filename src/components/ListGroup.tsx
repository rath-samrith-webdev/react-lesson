// TODO: the components in Reacts Declare using functions.
// TODO: In react using className instead of class
// TODO: In react doesn't have the for loops so to make the rendering posible we need to used the fuctions to rander the data
/*
Note: That each react'
Components can return only one element at a time.
*/
// NOTED: Each Components contains the HTML tags as well as

function ListGroup() {
  const cities=[
    'New York',
    'LA',
    'Tokyo',
  ]
  return (
    <>
      <h1 className="text-primary text-center">List Group</h1>
      <div className="container">
        <ul className="list-group">
          {cities.map(item=><li className="list-group-item" key={item}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}
export default ListGroup;
