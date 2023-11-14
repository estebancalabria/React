import {createContext} from "react"

type LoginContext = {
    isLoggedIn : boolean,
    usuarioActual? : String
    logIn : (usuario:string, password:string) => any
    logOut : () => void;
}


export default createContext<LoginContext>({ 
    isLoggedIn:false,
    logIn : (u,p)=>{},
    logOut : ()=>{}
});