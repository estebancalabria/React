import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const TodoList = ({ titulo }) => {

    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Rendir examen", done: false },
        { id: 2, nombre: "Preparar un mate", done: false },
        { id: 3, nombre: "Pasear al perro", done: false },
        { id: 4, nombre: "Practicar React", done: false }
    ]);
    const [nombreTareaNueva, setNombreTareaNueva] = useState("");
    const agregarTareaNueva = () =>{
        (nombreTareaNueva.length>0) 
        && setTareas([
            ...tareas,
            {
                id: Math.max(...tareas.map(t=>t.id),0) + 1,
                nombre: nombreTareaNueva,
                done: false
            }
        ]);
        setNombreTareaNueva("");
    }

    return (<>
        <ul className="list-group">
            <li className="list-group-item active">
                {titulo}
            </li>
            {
                tareas.map((tarea) => (
                    <li className="list-group-item" key={tarea.id}>
                        {tarea.nombre}
                        <button className="btn btn-danger float-end"
                            onClick={() => {
                                //Estoy en un componente funcional! No va el this!
                                setTareas(tareas.filter((t) => t.id != tarea.id));
                            }}
                        >
                            -
                        </button>
                    </li>
                ))
            }
            <li className="list-group-item">
                <div className="input-group">
                    <input className="form-control" 
                        value={nombreTareaNueva}
                        placeholder="Nombre tarea Nueva..."
                        onChange={(evt) => {
                            setNombreTareaNueva(evt.target.value);
                        }} 
                        onKeyUp={(evt)=>{
                            if (evt.key == "Enter"){
                                agregarTareaNueva();
                            }
                        }}/>
                    <button className="btn btn-outline-success" onClick={() => {
                        agregarTareaNueva();
                    }}>
                        +
                    </button>
                </div>
            </li>
        </ul>
    </>)
}

export default TodoList;