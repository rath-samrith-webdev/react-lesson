// TODO: This components contains condition rendering as you can see below

/**
 *
 * @items is an @array of the type any
 * the  {!items.length && <p className="alert alert-danger text-danger text-center">No Data in conditional rendering components</p>}
 * is the condition to render the text 'No Data in conditional rendering components' the there is no item in @items array
 *
 */

function ListGroupFtCondi() {
  const items: [] = [];
  return (
    <>
      <h1 className="text-primary text-center">List Group</h1>
      <div className="container">
        {!items.length && (
          <p className="alert alert-danger text-danger text-center">
            No Data in conditional rendering components
          </p>
        )}
        <ul className="list-group">
          {items.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListGroupFtCondi;
