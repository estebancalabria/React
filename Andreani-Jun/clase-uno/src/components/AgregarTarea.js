import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const AgregarTarea = (props) => {
    
    const [tarea, setTarea] = useState("");

    return (<div className="w-50 mx-auto">
        <div className="input-group">
            <input type="text" className="form-control"
                value={tarea}
                onChange={(evt)=>{ setTarea(evt.target.value)}}
                placeholder="Ingrese una tarea..." />

            <button className="btn btn-outline-primary" 
                    onClick={()=>{ 
                        props.addTarea(tarea); 
                        setTarea("");
                    }}>
                +
            </button>
        </div>
        <div className="text-end text-info">
            Total Tareas : {props.totalTareas}
        </div>
    </div>);
}

export default AgregarTarea;