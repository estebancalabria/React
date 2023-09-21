import { useMemo, useState } from "react";

function resultadoOperacionCostosa(){
    let suma = 0;
    for (let i=0; i<999999999;i++){
        suma +=i;
    }
    return suma;
}

const UseMemoDemo = (props) => {
    const [val, setVal] = useState(0);
    const res = useMemo(()=>(resultadoOperacionCostosa()),[]);
    return (<div>
        Resultado {res}
        <button onClick={()=>{setVal(val+1)}}>Re Renderizar {val}</button>
    
    </div>);
}
 
export default UseMemoDemo;