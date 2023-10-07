import axios from "axios";
import * as actionCreators from "../../actions/action-creators";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const InicializadorTareasRedux = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((resp) => {
                let accion = actionCreators.actionInicializarListaTareas(
                    resp.data.map((t)=>({
                        id: t.id,
                        nombre : t.title,
                        done : t.completed
                    })));
                //alert(JSON.stringify(accion));
                
                dispatch(accion);
            })
    }, []);

    return (<></>);
}

export default InicializadorTareasRedux;