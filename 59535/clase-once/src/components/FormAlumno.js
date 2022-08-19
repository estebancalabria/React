import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const FormAlumno = ({onSubmit}) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [profesion, setProfesion] = useState("");

    return (<form>
        Nombre:
        <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} 
            className="form-control" type="text" />
        
        Apellido:
        <input value={apellido} onChange={(e)=>{setApellido(e.target.value)}} 
            className="form-control" type="text" />
        
        Profesion:
        <input value={profesion} onChange={(e)=>{setProfesion(e.target.value)}} 
            className="form-control" type="text" />

        <button type="button" className="btn btn-primary mt-2 w-100"
            onClick={()=>{
                (nombre.length>0) 
                && (apellido.length>0) 
                && (profesion.length>0)
                && onSubmit({nombre,apellido,profesion})
                && setNombre("")
                && setApellido("")
                && setProfesion("")
            }}>
            Agregar
        </button> 
    </form>);
}
 
export default FormAlumno;