import axios from "axios";
import { useEffect } from "react";
import URLS from "../init/URLS";
import { ACT_INIT_TODO } from "../actions/action-types";
import { useDispatch } from "react-redux";


const Updater = (props) => {

    const dispatch = useDispatch(); //dispatch = funcion que hace llegar accion al reducer
    //use effect agenda una funcion a ejecutarse cuando el componente ya se haya renderizado
    useEffect(()=>{
        axios.get(URLS.URL_TAREAS).then((resp)=>{
            const accion = {
                type : ACT_INIT_TODO,
                payload : resp.data
            }
            dispatch(accion);  //ejecuta el reducer
        });
    }, []);

    return (<></>);
}
 
export default Updater;