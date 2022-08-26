import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormAlumno from "./FormAlumno";
import {useNavigate} from "react-router-dom";
import { editarAlumno } from "../actions/action-creators";

export default (props) =>{
    const navigate = useNavigate();
    let params = useParams();
    let id = params.id;
    let alumno = useSelector(state => state.alumnos.find((a)=>(a.id==id)));
    let dispatch = useDispatch();

    return <FormAlumno alumno={alumno} onSubmit={(alu)=>{
        //Falta el dispatch al reducer
        let action = editarAlumno(alu);
        dispatch(action);        
        navigate("/");
    }} />;
}