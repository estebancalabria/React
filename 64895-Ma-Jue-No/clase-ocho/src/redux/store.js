import { configureStore } from "@reduxjs/toolkit"

const defaultStore = {
    productos : [
        {id:1, nombre:"Televisor"},
        {id:2, nombre:"Lavarropas"},
        {id:3, nombre:"Licuadora"},
    ]
}

export default configureStore({
    reducer : (s,a) => (s), //Lo vemos la proxima clase
    preloadedState : defaultStore
});