import axios from "axios";
import { useEffect, useState } from "react";

const Fetch = (props) => {

    const [state, setState] = useState(null);

    //Se ejecuta luego de mostrar el componente (componentDidMount)
    useEffect(()=>{
        axios.get(props.url).then((resp)=>{
            setState(resp.data);
        })
    },[]);

    if (state){
        return props.render(state);
    }

    return (<></>);
}
 
export default Fetch;