import "bootstrap/dist/css/bootstrap.css";
import { ChangeEvent, useState } from "react";
import * as Bs from "react-bootstrap";

type LoginEvent = (usuario: String, password: String) => boolean;

type LoginFormProps = {
    onLogin: LoginEvent
}

const LoginForm = (props: LoginFormProps) => {

    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [badCredentials, setBadCredentials] = useState<boolean>(false);

    return (<Bs.Form>
        <Bs.Alert variant="primary" className="text-center">
            Login
        </Bs.Alert>
        <Bs.FormLabel>Usuario</Bs.FormLabel>
        <Bs.FormControl placeholder="Usuario" onChange={(evt) => {
            setUsername(evt.target.value);
        }} />
        <Bs.FormLabel>Password</Bs.FormLabel>
        <Bs.FormControl type="password" placeholder="Password" onChange={(evt) => {
            setPassword(evt.target.value);
        }} />
        {
            badCredentials && <Bs.Alert variant="danger">
                Credenciales Incorrectas
            </Bs.Alert>
        }
        <div className="text-end mt-3">
            <Bs.Button variant="primary" onClick={() => {
                setBadCredentials(!props.onLogin(username, password));
            }}>
                Login
            </Bs.Button>
        </div>
    </Bs.Form>);
}


export default LoginForm;
