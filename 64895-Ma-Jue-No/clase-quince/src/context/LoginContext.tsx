import {createContext} from "react"

type LoginContext = {
    isLoggedIn : boolean,
    usuarioActual? : String
    logIn : (usuario:string, password:string) => any
}


export default createContext<LoginContext>({ 
    isLoggedIn:false,
    logIn : (u,p)=>{}
});