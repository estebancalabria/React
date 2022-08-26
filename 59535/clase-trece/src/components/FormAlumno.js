import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

const FormAlumno = ({onSubmit, alumno}) => {

    document.title = "Formulario Alumno";
    
    const [nombre, setNombre] = useState(alumno?.nombre || "");
    const [apellido, setApellido] = useState(alumno?.apellido ||"");
    const [profesion, setProfesion] = useState(alumno?.profesion ||"");

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
                let id = alumno?.id || null;

                (nombre.length>0) 
                && (apellido.length>0) 
                && (profesion.length>0)
                && onSubmit({id,nombre,apellido,profesion})
                && setNombre("")
                && setApellido("")
                && setProfesion("")
            }}>
            Confirmar
        </button> 
    </form>);
}
 
export default FormAlumno;