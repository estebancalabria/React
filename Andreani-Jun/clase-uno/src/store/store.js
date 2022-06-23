import { createStore } from "redux";
import reducer from "../reducers/reducer";

const tareas = [
    { id: 1, nombre :"Bañarse (Store)", done:false},
    { id: 2, nombre :"Lavar los platos  (Store)", done:false},
    { id: 3, nombre :"Trabajar  (Store)", done:false}
  ]

export default createStore(reducer, tareas)