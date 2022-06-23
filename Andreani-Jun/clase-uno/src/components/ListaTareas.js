import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";

const ListaTareas = (props) => {
    return (<ul className="list-group w-50 mx-auto">
        <li className="list-group-item active">Lista de Tareas</li>
        {
            props.tareas.map( (tarea) => (
                    <li className="list-group-item" key={tarea.id}>
                        {tarea.nombre}

                        <button className="btn btn-danger float-end"
                        onClick={()=>{
                            Swal.fire({
                                title: 'Seguro Desea eliminar la tarea?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  props.eliminarTarea(tarea.id);
                                }
                              })
                        }}>
                            -
                        </button>
                    </li>
              )
            )
        }
    </ul>);
}
 
export default ListaTareas;