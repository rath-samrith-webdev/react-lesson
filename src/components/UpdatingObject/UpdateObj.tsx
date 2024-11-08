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
import {useState} from "react";


const UpdateObj = () => {
    const [tags,setTags] = useState( ['happy','cheerful'])
    const handleClick = () => {
        /**
         * Insert @tag
         */
        setTags([...tags, 'sad'])
        /**
         * Remove Tags
         */
        setTags(tags.filter(tag => tag !== 'happy'))

        /**
         * Update Tag
         */
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
    }

    return <>
        <div className="d-flex gap-2 justify-content-between align-content-center">
            {tags.map((tag) => <div onClick={handleClick} key={tag} className="badge badge-light text-bg-success p-2 rounded-md">{tag}</div>)}
        </div>
    </>
}
export default UpdateObj;