interface Props {
  filter: (cat: string) => void;
}
const Select = ({ filter }: Props) => {
  return (
    <>
      <div className="card mt-2">
        <select onChange={() => filter("val")} className="form-select">
          <option value={"Utilise"}>Utilise</option>
          <option value={"Groceries"}>Groceries</option>
          <option value={"Utilise"}>Utilise</option>
        </select>
      </div>
    </>
  );
};
export default Select;
