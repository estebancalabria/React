import axios from "axios";
import { useEffect, useState } from "react";

const Get = (props) => {

    const [state, setState] = useState(null);

    //Se ejecuta luego de mostrar el componente (componentDidMount)
    useEffect(()=>{
        axios.get(props.url).then((resp)=>{
            setState(resp.data);
        })
    },[]);

    if (state){
        return props.children(state);
    }

    return (<></>);
}
 
export default Get;