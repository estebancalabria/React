
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";
import LoginContext from "../context/LoginContext";

const Home = () => {

    const context = useContext(LoginContext);

    return (<>
        {
            context.isLoggedIn
                ? <Mui.Box>
                    Esta Logueado. Bienvenido {context.usuarioActual}
                    <Mui.Button variant="outlined" onClick={() => {
                        context.logOut();
                    }}>
                        Logout
                    </Mui.Button>
                    <Mui.Box>
                        <Link to="productos">Ir a la pagina de los productos</Link>
                    </Mui.Box>
                </Mui.Box>
                : <Mui.Box>
                    No esta logieado <Link to="login">Login</Link>
                </Mui.Box>
        }
    </>);
}

export default Home;