import { Tarea } from "../models/Tarea";
import "bootstrap/dist/css/bootstrap.css";


interface TareasProps {
    tareas : Tarea[];
}

const Tareas = (props:TareasProps) => {

    return (<>
        <h1>
            Listado de Tareas
        </h1>
        <ul className="list-group">
            <li className="list-group-item active">Tareas</li>
            {
                props.tareas.map((tarea) => (
                    <li className="list-group-item"
                        key={tarea.id}>
                        {tarea.nombre}
                    </li>
                ))
            }
        </ul>
    </>)
}

export default Tareas;