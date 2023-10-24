import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

const InputConBoton = ({onInput}) => {

    const [val, setVal] = useState("");

    return (<div className="input-group">
        <input className="form-control" value={val} onChange={(evt)=>{
            setVal(evt.target.value);
        }} />
        <button className="btn btn-outline-primary" onClick={()=>{
            onInput(val);
            setVal("");
        }}>
            Agregar Tarea
        </button>

    </div>);
}
 
export default InputConBoton;