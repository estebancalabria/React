import FormAlumno from "../components/FormAlumno"
import { useDispatch } from "react-redux";
import { addAlumno } from "../actions/action-creators";

export default (props) =>{

    const dispatch = useDispatch();

    return <FormAlumno onSubmit={(alumno)=>{
        const accion = addAlumno(alumno);
        dispatch(accion);
    }} 
    {...props} />
}