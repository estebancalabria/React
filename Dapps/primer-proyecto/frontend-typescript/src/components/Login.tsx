import { useState } from "react";

interface LoginProps {
    onLogin: (email: string, pass: string) => void;
}

const Login = (props: LoginProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (<form className="w-50 m-auto mt-5 border p-3 rounded">
        <legend> Formulario de Login</legend>

        <label>Correo:</label>
        <input className="form-control" type="email" onChange={(e) => {
            setEmail((e.target as HTMLInputElement).value);
        }} />

        <label>Password:</label>
        <input className="form-control" type="password" onChange={(e) => {
            setPassword(e.target.value);
        }} />


        <button type="button" className="btn btn-success w-100 mt-2"
            disabled={(email.length==0) || (password.length<4)}
            onClick={() => {
                props.onLogin(email,password);
            }}>
            Login
        </button>
    </form>)
}

export default Login;