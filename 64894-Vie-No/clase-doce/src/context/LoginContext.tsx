import {createContext} from "react";

export type LoginContextData = {
    isLoggedIn : boolean,
    currentUsername? : String;
    logIn? : (usuario:String, password:String) => boolean;
    logout? : () => void
}


export default createContext<LoginContextData>({
    isLoggedIn : false
});

