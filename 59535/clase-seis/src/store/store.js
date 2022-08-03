import { createStore } from "redux"

const state = {
   value : 3
}

const store = createStore((s,a)=>(s), state);

//si es un export default lo puedo importar con el nombre que quiero
 export default store;