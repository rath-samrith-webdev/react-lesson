import  {useState} from "react";

/**
 *@UpdateObj is a components
 *when creating an object
 * * Avoid deep nested objects since it is hard to update
 * * You can't update an object like this in react
 * * const [person, setPerson] = useState({
 *         name: 'John',
 *         age: 20,
 *         gender: 'male'
 *     })
 * * Update Drink
 * * person.name='jane'
 * * @setPerson(person)
 * * This will not work.
 * * Instead create a new object and then set the old value to the new object value
 * * const newPerson={
 *     name:"new Name",
 * }
 * *@setPerson(newPerson)
 * * This will take this new object value and then change the key that matches the new object key.
 * * or you can also update it like this
 * *@setPerson({...person,name:'new name'})
 * * the {...person} is use spread the object,
 */

const UpdateObj = () => {
    const [person, setPerson] = useState({
        name: 'John',
        age: 20,
        gender: 'male'
    })
    return <>
        <h1>Updating Object</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Gender: {person.gender}</p>
        <button className="btn btn-primary me-3"  onClick={() => setPerson({...person, name: 'Jane'})}>Update Name</button>
        <button className="btn btn-primary me-3"    onClick={() => setPerson({...person, age: 21})}>Update Age</button>
        <button className="btn btn-primary me-3"   onClick={() => setPerson({...person, gender: 'female'})}>Update Gender</button>
    </>
}
export default UpdateObj;