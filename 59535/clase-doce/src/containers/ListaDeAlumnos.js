import { useDispatch, useSelector } from "react-redux";
import { deleteAlumno } from "../actions/action-creators";
import ListaDeAlumnos from "../components/ListaDeAlumnos"
import {useNavigate} from "react-router-dom";

export default (props)=>{

    //mapDispatchToProps
    const alumnos = useSelector(state => state.alumnos); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <ListaDeAlumnos {...props} alumnos={alumnos}
     onEliminar={(id)=>{
        let accion = deleteAlumno(id);
        dispatch(accion);
     }}
     
     onEditar={(id)=>{
        navigate("/editar/"+id);
     }}
     
     />
}