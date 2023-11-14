import LoginContext from "./LoginContext";
import {useState} from "react";

type LoginProviderProps = {
    children : React.ReactNode
}


const LoginProvider = (props : LoginProviderProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [usuarioActual, setUsuarioActual] = useState<String>("")

    return (<LoginContext.Provider value={{
        isLoggedIn: isLoggedIn,
        usuarioActual : usuarioActual,
        logIn: (usuario, password) => {
          if ((usuario === "admin") && (password === "123")) {
            setIsLoggedIn(true);
            setUsuarioActual("admin");
            return true;
          }
          return false;
        },
        logOut: () => { setIsLoggedIn(false) }
      }}>
        {
            props.children
        }
    </LoginContext.Provider>);
}
 
export default LoginProvider;