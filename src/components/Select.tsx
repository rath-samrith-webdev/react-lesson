interface Props {
  filter: (cat: string) => void;
}

const Select = ({ filter }: Props) => {
  return (
    <>
      <div className="card mt-2">
        <select
          onChange={(event) => filter(event.target.value)}
          className="form-select"
        >
          <option id="all" value={"All"}>
            All
          </option>
          <option id="utils" value={"Utilise"}>
            Utilise
          </option>
          <option id="groceries" value={"Groceries"}>
            Groceries
          </option>
          <option id="utils" value={"Utilise"}>
            Utilise
          </option>
        </select>
      </div>
    </>
  );
};
export default Select;
