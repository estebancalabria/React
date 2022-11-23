import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const AgregarTarea = ({ onAdd, count }) => {
    const [tarea, setTarea] = useState("tarea");

    return (<>
        <div className="input-group">
            <input className="form-control" type="text"
                placeholder="Ingrese nueva Tarea"
                value={tarea}
                onChange={(evt) => {
                    setTarea(evt.target.value)
                }} />

            <button className="btn btn-outline-primary"
                onClick={() => {
                    onAdd(tarea);
                    setTarea("");
                }}>
                +
            </button>
        </div>
        <div className="text-muted text-end">
            En total hay {count} tareas
        </div>
    </>);
}

export default AgregarTarea;