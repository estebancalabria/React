import { useContext } from "react";
import StyleContext from "./StyleContext";

//A diferencia del otro este lo recibe los estilos
const TituloConContextApi = ({texto}) => {
    const context = useContext(StyleContext);
    
    return (<h1 style={{...context.estilos, margin:"0px", padding:"1em"}}>
        {texto}
    </h1>);
}
 
export default TituloConContextApi;