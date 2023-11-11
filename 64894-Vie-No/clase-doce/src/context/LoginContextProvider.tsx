import {useState} from "react";
import LoginContext from "./LoginContext";

type LoginContextProps = {
    children : React.ReactNode
}

const LoginContextProvider = (props: LoginContextProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<String>("");

    return (<LoginContext.Provider value={{
        isLoggedIn : isLoggedIn,
        currentUsername : username,
        logIn : (u,p) =>{
            if ((u==="admin") && (p==="1234")){
                setIsLoggedIn(true); 
                setUsername(u);
                return true;
            }             
            return false;
        },
        logout : () => {setIsLoggedIn(false);}
    }}>
        {
            props.children
        }
    </LoginContext.Provider>);
}
 
export default LoginContextProvider;

