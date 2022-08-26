import FormAlumno from "../components/FormAlumno"
import { useDispatch } from "react-redux";
import { addAlumno } from "../actions/action-creators";
import { useNavigate} from "react-router-dom";


export default (props) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <FormAlumno onSubmit={(alumno)=>{
        const accion = addAlumno(alumno);
        dispatch(accion);
        navigate("/");
    }} 
    {...props} />
}