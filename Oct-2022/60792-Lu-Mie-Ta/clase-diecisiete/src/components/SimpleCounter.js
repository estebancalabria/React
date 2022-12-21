import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function SimpleCounter({initialValue = 0}){
    const [count, setCount] = useState(initialValue);

    return (<div className="text-center">
        Contador: {count}
        <div>
            <button className="btn btn-success" 
            onClick={()=>{setCount(count+1)}}>
                +
            </button>
            <button className="btn btn-danger"
            onClick={()=>{
                setCount(count-1)
            }}>
                -
            </button>
        </div>
    </div>);
}