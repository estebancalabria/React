import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPersonas } from "../actions/action-creators";

const Init = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3001/personas").then((resp)=>{
            let personas = resp.data;
            let accion = initPersonas(personas);
            dispatch(accion);
        });
    }, []); //<<< Aca se hacen las llamadas asincronicas 

    return (<></>);
}

export default Init;