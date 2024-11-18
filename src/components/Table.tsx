type Expense = {
  description: string;
  price: number;
  category: string;
};
interface Props {
  items: Array<Expense>;
  onDelete: (id: string) => void;
}
const Table = ({ items, onDelete }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
            <th scope="col">Expense</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ description, price, category }, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{description}</td>
              <td>{price}</td>
              <td>{category}</td>
              <td>
                <button
                  onClick={() => onDelete(description)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
