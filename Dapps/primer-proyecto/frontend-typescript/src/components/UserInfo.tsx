import { useContext } from "react";
import SessionContext, { ISessionContext } from "../context/SessionContext";

const UserInfo = () => {

    //const context = useContext(SessionContext); >>> sin TypeScript
    const context: ISessionContext = useContext<ISessionContext>(SessionContext);

    return context.user
        ? <div className="alert alert-primary text-end mb-0">Usuario Actual: {context.user}</div>
        : <div className="alert alert-info text-end mb-0">Usuario no logeado</div>
}

//Forma alternativa de consumir un contexto en este caos
/*const UserInfo = () => {

    <SessionContext.Consumer>
        {
            (context) => (
                context.user
                    ? <div className="alert alert-primary text-end mb-0">Usuario Actual: {context.user}</div>
                    : <div className="alert alert-info text-end mb-0">Usuario no logeado</div>
            )
        }
    </SessionContext.Consumer>
}*/

export default UserInfo;