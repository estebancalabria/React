import { actListarAlumnos } from "../actions/action-creators";
import { useDispatch } from "react-redux";

export default function Init(){
    const dispatch = useDispatch();
    return (<>
    <button onClick={()=>{dispatch(actListarAlumnos())  }}>
        Mandar Accion ACT_GET_ALUMNOS
      </button>
    </>)
}