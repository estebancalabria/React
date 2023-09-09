import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Swal from "sweetalert2";

const TodoList = (props) => {

    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Mirar el partido de la Escaloneta", done: false },
        { id: 2, nombre: "Programar el Todo List", done: false },
        { id: 3, nombre: "Practicar React ❤️", done: false }
    ]);

    const [nuevaTarea, setNuevaTarea] = useState("");

    return (<ul className="list-group">
        <li className="list-group-item text-center active">Lista de Tareas</li>
        <li className="list-group-item">
            <div className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese una tarea nueva"
                    onChange={(evt) => {
                        setNuevaTarea(evt.target.value);
                    }}
                    value={nuevaTarea}
                />
                <button className="btn btn-outline-primary" onClick={() => {
                    /*if (nuevaTarea.length>0){
                        setTareas([
                            ...tareas,
                            {
                                id:tareas.length+1,
                                nombre:nuevaTarea,
                                done:false
                            }
                        ]);
                    }*/

                    (nuevaTarea.length > 0) && setTareas([...tareas,
                                                          {
                                                                id: Math.max(...tareas.map((t)=>(t.id)),0)+1,
                                                                nombre: nuevaTarea,
                                                                done: false
                                                          }]);


                    setNuevaTarea("");
                }}>
                    Agregar
                </button>
            </div>
        </li>
        {
            tareas.map((tarea) => (
                <li key={tarea.id} className="list-group-item">

                    <input className="form-check-input me-2" 
                           type="checkbox" 
                           value={tarea.done}
                           onChange={()=>{
                                setTareas([
                                    ...tareas.map((t)=>( (t.id===tarea.id) ? {...t, done:!t.done} : t ))
                                ]);
                           }}/>

                    { tarea.done ? <s>{tarea.nombre}</s> : tarea.nombre }

                    <button className="btn btn-danger float-end" 
                            style={{textShadow: "2px 2px 3px black"}}
                            onClick={()=>{
                                Swal.fire({
                                    title: "¿Desea eliminar la tarea?",
                                    text: tarea.nombre,
                                    showCancelButton: true,
                                    cancelButtonText: "Cancelar",
                                    confirmButtonText: "Eliminar",
                                    icon: "warning"
                                }).then((resp)=>{
                                    if (resp.isConfirmed){
                                        setTareas([
                                            ...tareas.filter((t)=>(t.id !== tarea.id))
                                        ])
                                    }
                                });
                            }}>
                         &#128465;&#65039;
                    </button>
                </li>
            ))
        }
    </ul>)
}

export default TodoList;