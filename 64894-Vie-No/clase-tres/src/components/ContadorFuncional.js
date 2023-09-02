import { useState } from "react";

function ContadorFuncional(props){
    console.log("Creando Componente ContadorFuncional")
    //let contador = 0;
    let [contador, setContador] = useState(0);

    return (<div className="border mt-3 text-center p-2">
        <h4>Contador Funcional</h4>
        <h3>{contador}</h3>
        <div>
            <button className="btn btn-primary m-1" onClick={()=>{
                setContador(contador-1);
            }}>
                -
            </button>
            <button className="btn btn-danger m-1" onClick={()=>{
                setContador(0);
            }}>
                Reset
            </button>
            <button className="btn btn-primary m-1" onClick={()=>{
                setContador(contador+1);
            }}>
                +
            </button>
        </div>
    </div>)
}

export default ContadorFuncional;