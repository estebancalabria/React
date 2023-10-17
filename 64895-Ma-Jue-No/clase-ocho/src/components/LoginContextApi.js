import "bootstrap/dist/css/bootstrap.css";
import { useContext, useState } from "react";
import SessionContext from "../session-context/SessionContext";

const LoginContextApi = (props) => {

    const context = useContext(SessionContext);
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            {
                (!context.isLoggedIn)
                    ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <form className="w-50 border p-4">
                            Usuario:
                            <input className="form-control" type="text"
                                onChange={(evt) => { setUsuario(evt.target.value) }} />
                            Password:
                            <input className="form-control" type="password"
                                onChange={(evt) => { setPassword(evt.target.value) }} />

                            <button className="btn btn-primary w-100 mt-3" onClick={() => {
                                context.logIn(usuario, password);
                            }}>
                                Log In
                            </button>
                        </form>
                    </div>
                    : <div>
                        <h1 className="text-center">
                            Bienvenido {context.userName}
                            <div className="text-center">
                                <button className="btn btn-primary w-50" onClick={() => {
                                    context.logOut();
                                }}>
                                    Log Out
                                </button>
                            </div>
                        </h1>
                        <div className="mt-3">
                            {props.children}
                        </div>
                    </div>
            }
        </div>);
}

export default LoginContextApi;