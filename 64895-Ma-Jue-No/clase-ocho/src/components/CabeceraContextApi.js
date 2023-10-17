import "bootstrap/dist/css/bootstrap.css"
import { useContext } from "react";
import SessionContext from "../session-context/SessionContext";

const CabeceraContextApi = () => {
    const context = useContext(SessionContext);

    return (<header className="alert alert-info text-center">
        <h1>Cabecera con Context Api</h1>
        {
            context.isLoggedIn
                ? <p className="text-muted text-end">Usuario Actual : {context.userName}</p>
                : <p className="text-muted text-end">Usuario Anonimo. Debe Loguearse</p>
        }
    </header>);
}

export default CabeceraContextApi;