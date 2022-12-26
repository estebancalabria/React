import { useEffect, useState } from "react";
import axios from "axios";


//children props
export default function GetC({url, children}:any){
    const [resp, setResp] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get(url).then((r)=>{
            setResp(r.data);
            setLoading(false);
        })
    },[]);

    return (!loading) ? children(resp) : <></>;
}