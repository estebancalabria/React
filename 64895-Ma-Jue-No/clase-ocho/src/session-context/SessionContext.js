import { createContext } from "react"

//Informativo, no influye en nada
//Esto es para que el programador vea que atributos tiene que tener
//Es como un "tipado" cosa que javascript no tiene
export const defaultContext = {
    userName : "User",
    isLoggedIn : true,
    role : "Admin"
}

export default createContext(defaultContext);