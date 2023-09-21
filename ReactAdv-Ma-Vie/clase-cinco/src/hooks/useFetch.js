import { useEffect, useState } from "react";
import axios from "axios";

//Vamos a probarlo, no pongo las manos en el fuego
function useFetch(url){
    var [data, setData] = useState([]);
    useEffect(()=>{
        (async ()=>{
            let resp = await axios.get(url);
            setData(resp.data);
        })()
       
    }, [url]);
    return data;
}

export default useFetch;