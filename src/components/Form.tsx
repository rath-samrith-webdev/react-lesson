import {FormEvent, useState} from "react";

const Form = () => {
  const [person,setPerson] = useState({
      name: "",
      age:''
  });

  const handleSummit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted person: =>", person);
  };
  return (
    <form onSubmit={handleSummit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input onChange={(event)=>setPerson({...person,name:event.target.value})}
               value={person.name} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input onChange={(event)=>setPerson({...person,age:event.target.value})} value={person.age} type="number" id="age" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
