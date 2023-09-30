import { useState } from "react";
import Incrementar from "./Incrementar";
import MostrarContador from "./MostrarCotador";

const ContadorPropsDrilling = () => {

    const [contador, setContador] = useState(0);

    return (<div className="border mx-auto text-center p-3 shadow" style={{ maxWidth: "60vw" }}>
        <h3>Ejemplo de contador con Props-Drilling</h3>
        <MostrarContador valor={contador} />
        <Incrementar valor={contador}
            onModificarContador={(nuevoValor) => {
                setContador(nuevoValor);
            }} />
    </div>);
}

export default ContadorPropsDrilling;