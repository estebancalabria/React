import { useState } from "react";

export default function FormularioTarea( {onAccept, 
    onCancel, 
    tarea={ nombre:"", done:false}}){

    const [tareaActual, setTareaActual] = useState(tarea);

    return (<>
    <h3>Formulario Tarea</h3>
    <form>
        <div>Nombre:</div>
        <div>
            <input type="text" 
                placeholder="Ingrese nombre tarea"
                value={tareaActual.nombre}
                onChange={(evt)=>{ 
                    setTareaActual({...tareaActual, nombre:evt.target.value})
                }} />
        </div>
        <div>
            <button type="button" onClick={onCancel}>Cancelar</button>
            <button type="button" 
              onClick={()=>{
                onAccept(tareaActual);
              }}>
                Aceptar
            </button>
        </div>
    </form>
    </>);
}