import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import FormAlumno from "./FormAlumno";
import {useNavigate} from "react-router-dom";

export default (props) =>{
    const navigate = useNavigate();
    let params = useParams();
    let id = params.id;
    let alumno = useSelector(state => state.alumnos.find((a)=>(a.id==id)));

    return <FormAlumno alumno={alumno} onSubmit={(alu)=>{
        //Falta el dispatch al reducer
        navigate("/");
    }} />;
}