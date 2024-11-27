import {useEffect, useRef} from "react";

/**
 * @useEffect is a function is usually called after the rendering of each components to prevents the sides affects and make components
 * remains pure
 **/
const Form=()=>{
    const refer = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(refer.current) refer.current.focus()
    })
    useEffect(()=>{
        document.title = 'useEffect';
    })
    return (<>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input ref={refer} id="email" type="email"/>
        </div>
    </>)
}
export default Form;
