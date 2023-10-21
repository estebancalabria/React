import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import darkStyles from "../styles/darkStyles";
import lightStyles from "../styles/lightStyles";


const CambiarEstilo = () => {
    const context = useContext(StyleContext);
    return (<div className="text-end p-2" style={context.style}
      onChange={(evt)=>{
        console.log(context);
         context.cambiarEstilo(evt.target.checked ? darkStyles : lightStyles);
      }}>
        Modo Dark 
        <input type="checkbox" className="ms-3" />
    </div>);
}
 
export default CambiarEstilo;