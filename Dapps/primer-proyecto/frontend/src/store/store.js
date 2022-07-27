import { createStore } from "redux";
import reducer from "../reducer/reducer";

const defaultStore = {
   tareas : [
    {id:1, nombre:"Tarea Uno en el Store", done:false},
    {id:2, nombre:"Tarea Dos en el Store", done:false},
    {id:3, nombre:"Tarea Tres en el Store", done:false}
  ]
}

export default createStore(reducer, defaultStore);