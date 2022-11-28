import "bootstrap/dist/css/bootstrap.css";
import StyleContext from "../context/StyleContext";
import { useContext } from "react";


const Titulo = ({texto})=>{

    const context = useContext(StyleContext);

    return <h1 className="text-center display-1 p-2" style={context}>
        {texto}
    </h1>
}

export default Titulo;