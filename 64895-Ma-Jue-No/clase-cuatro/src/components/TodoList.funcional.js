import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Swal from "sweetalert2";

function TodoListFuncional() { //Snippet ffc

    const [tareaNueva, setTareaNueva] = useState("");
    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Aprender React", done: false },
        { id: 2, nombre: "Aprender Firebase", done: false },
        { id: 3, nombre: "Aprender Typescript", done: false }
    ]);


    //tareas.map((t)=>(t.id))
    //let arr = [2,3,4,5];
    //let max = Math.max(...arr);  //Me devuelve 5

    return (<ul className="list-group mx-auto" style={{ maxWidth: "60vw" }}>
        <li className="list-group-item active">
            Mis Tareas
        </li>
        <li className="list-group-item">
            <div className="input-group">
                <input className="form-control" type="text"
                    value={tareaNueva}
                    placeholder="Ingrese una tarea nueva"
                    onChange={(evt) => {
                        setTareaNueva(evt.target.value);
                    }} />
                <button className="btn btn-outline-primary"
                    disabled={tareaNueva.length === 0}
                    onClick={() => {
                        (setTareaNueva.length > 0) && setTareas([...tareas, {
                            //id: tareas.length + 1, //BUG en el futuro
                            id : Math.max(...tareas.map((t)=>(t.id)), 0) + 1,
                            nombre: tareaNueva,
                            done: false
                        }]);
                        setTareaNueva("");
                    }}>
                    +
                </button>
            </div>
        </li>
        {
            //Opcion 1 : Con {} . arr.map(()=>{ return ...})
            /*tareas.map((tarea)=>{
                return <li key={tarea.id} className="list-group-item">{tarea.nombre}</li>
            })*/

            //Opcion 2 : Con () . arr.map(()=>(...)) return implicito
            tareas.map((tarea) => (
                <li key={tarea.id}
                    className="list-group-item">
                    {tarea.nombre}

                    <button
                        className="btn btn-danger float-end" 
                        onClick={()=>{
                            Swal.fire({
                                title:"Confirmacion eliminar",
                                text : `Desea eliminar "${tarea.nombre}"`,
                                showCancelButton: true,
                                icon : "warning"
                            }).then((resp)=>{
                                (resp.isConfirmed) && setTareas(tareas.filter((t)=>( t.id !== tarea.id)));
                            });                            
                        }}>
                        x
                    </button>
                </li>
            ))
        }
    </ul>);
}

export default TodoListFuncional;

//Snippets
//ffc  => Componente Funcional
//cc   => Componente de Clases
//ccc  => Componente de Clases con Constructor
//scf  => Componente con funcion flecha

