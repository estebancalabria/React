import { Tarea } from "../models/Tarea";
import axios from "axios";

const URL_TAREAS = "http://localhost:3001/440/tareas";

export class TareaService{

    getAll():Promise<Tarea[]>{
        return new Promise((accept, reject)=>{
            axios.get(URL_TAREAS,
                {
                    headers : {
                        Authorization : "Bearer " + localStorage.getItem("token")!
                    }
                }).then((resp) => {
                accept(resp.data);
            }).catch((err)=>{
                reject(err);
            });
        })
    }
}