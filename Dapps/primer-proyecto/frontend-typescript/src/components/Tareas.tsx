import { useEffect, useState } from "react";
//import axios from "axios";
import { Tarea } from "../models/Tarea";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { TareaService } from "../services/tarea.service";

//const URL_TAREAS = "http://localhost:3001/440/tareas";

const Tareas = (props: any) => {

    const [tareas, setTares] = useState<Tarea[]>([]);
    const navigate = useNavigate();
    //TODO:Inyeccion de dependencias
    const service : TareaService = new TareaService();

    useEffect(() => {
        service.getAll().then((resp) => {
            setTares(resp);
        }).catch((err)=>{
            //TODO: Remplazar por la libreria SweetAlert
            alert("Error de Autenticacion");
            localStorage.removeItem("token");
            navigate("/login");
        })
    }, []);

    return (<>
        <h1>
            Listado de Tareas
        </h1>
        <ul className="list-group">
            <li className="list-group-item active">Tareas</li>
            {
                tareas.map((tarea) => (
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