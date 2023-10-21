import { useContext } from "react";
import StyleContext from "../contexts/StyleContext";

/*
//Sin Context ApI
const Parrafo = ({texto,style}) => {
    return (<p style={style}>
        {texto}
    </p>);
}*/

//Con Context API
const Parrafo = ({texto}) => {

    const context = useContext(StyleContext);

    return (<p style={context.style}>
        {texto}
    </p>);
}
 
export default Parrafo;