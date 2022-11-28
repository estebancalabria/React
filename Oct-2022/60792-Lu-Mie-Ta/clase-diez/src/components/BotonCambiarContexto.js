import "bootstrap/dist/css/bootstrap.css";
import StyleContext from "../context/StyleContext";
import { useContext } from "react";

const BotonCambiarContexto = () => {

    const context = useContext(StyleContext);

    return (<button className="btn btn-primary"
        onClick={context.cambiarModo}>
        Ejemplo Cambiar Contexto Desde Componente
    </button>);
}

export default BotonCambiarContexto;