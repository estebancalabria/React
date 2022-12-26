import { useEffect, useState } from "react";
import axios from "axios";


//render props
export default function Get({url, render}:any){
    const [resp, setResp] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get(url).then((r)=>{
            setResp(r.data);
            setLoading(false);
        })
    },[]);

    return (!loading) ? render(resp) : <></>;
}