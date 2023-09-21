import { useRef } from "react";

const UseRefDemo = (props) => {

    const inputRef = useRef();

    return (<div>
        <input ref={inputRef} type="text" />
        <button onClick={()=>{ inputRef.current.focus()}}>Set Focus</button>
        <button onClick={()=>{ inputRef.current.value = "Hola que tal"}}>Set Text</button>
    </div>); 
}
 
export default UseRefDemo;