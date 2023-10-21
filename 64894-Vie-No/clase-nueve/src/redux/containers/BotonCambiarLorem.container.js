import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import * as types from "../actions/action-types";

const BotonCambiarLorem = () => {
    
    const dispatch = useDispatch();
    
    return (<button className="btn btn-primary" onClick={()=>{
        
        dispatch({
            type : types.SET_LOREM,
            payload : "Cambio el lorem por este texto nuevo"
        })
    }}>
        Cambiar Lorem Por Otra Cosa
    </button>);
}
 
export default BotonCambiarLorem;