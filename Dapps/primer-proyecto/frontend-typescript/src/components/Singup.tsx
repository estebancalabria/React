import { SyntheticEvent, useState } from "react";
import Registro from "../models/Registro";

/*type SingupProps = {
    //onRegister : Function;
    onRegister : (reg : Registro) => void;   
}*/

interface SingupProps {
    //onRegister : Function;
    onRegister : (reg : Registro) => void;   
}

const Singup = (props:SingupProps) => {
    //const [nombre, setNombre] = useState<string|null|number>("");
    const [nombre, setNombre] = useState<string>("");
    const [usuario, setUsuario] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");

    return (<form className="w-50 m-auto mt-5 border p-3 rounded">
        <legend> Formulario de Registro</legend>

        <label>Nombre:</label>
        <input className="form-control" type="text" onChange={(e: SyntheticEvent) => {
            let input = e.target as HTMLInputElement;
            setNombre(input.value);
        }} />

        <label>Usuario:</label>
        <input className="form-control" type="text" onChange={(e) => {
            setUsuario((e.target as HTMLInputElement).value);
        }} />

        <label>Password:</label>
        <input className="form-control" type="password" onChange={(e) => {
            setPassword(e.target.value);
        }} />

        <label>Repetir Password:</label>
        <input className="form-control" type="password" onChange={(e: SyntheticEvent) => {
            setRePassword((e.target as HTMLInputElement).value);
        }} />

        <button type="button" className="btn btn-success w-100" onClick={() => {
            let registro: Registro = new Registro(nombre, usuario, password, rePassword);
            //let registro: Registro = {nombre, usuario, password, rePassword};
            //let registro: Registro = {nombre:nombre, usuario:usuario, password: password, rePassword:rePassword};
            props.onRegister(registro);
        }}>
            Registrar Usuario
        </button>
    </form>)
}

//Singup.propTypes = {...}

export default Singup;