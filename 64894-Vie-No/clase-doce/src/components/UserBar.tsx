import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { Link } from "react-router-dom";

const UserBar = () => {

    let context = useContext(LoginContext);

    return (<Bs.Alert variant="success" className="text-end">
        {
            context.isLoggedIn
                ? <>
                    <span>Bienvenido </span>
                    {context.currentUsername}
                    <Bs.Button variant="primary"
                        className="ms-2"
                        onClick={
                            () => { context.logout!() }
                        }>
                        Logout
                    </Bs.Button>
                </>
                : <>
                     Inicie sesion 
                     <Link to="login">Login In</Link>
                </> 
        }
    </Bs.Alert>);

}

export default UserBar;