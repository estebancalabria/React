import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function ContadorFuncional(){

    //let contador = 0;  Si modifico esta variable asi no se refleja en la interfaz grafica
    const [contador, setContador] = useState(0);

    function decrementarContador(){
        //One Liner Fachero
        (contador>0) && setContador(contador-1);
        //Mas fachero que hacer un if...
        /*if (contador>0){
            setContador(contador-1);
        }*/
    }

    return (<div className="text-center border p-3 shadow m-2">
        <h3>Contador Funcional {contador}</h3>
        <div>
            {/* Declarando la funcion afuera */}
            <button className="btn btn-success me-2" onClick={decrementarContador}>
                -
            </button>
            
            {/* Funcion anonima declarativa */}
            <button className="btn btn-danger" onClick={function(){
                setContador(0);
            }}>
                Reset
            </button>
            
            {/* Opcion con funcion flecha */}
            <button className="btn btn-success ms-2" onClick={()=>{
                setContador(contador+1);
                //contador = contador +1; 
            }}>
                +
            </button>
        </div>
    </div>);
}

export default ContadorFuncional;