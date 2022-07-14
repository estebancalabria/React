import { useContext } from "react";
import StyleContext from "../context/StyleContext";

const HookContextConsumer = () => {
    //parecido al useSelector de redux pero para contextApi
    const context = useContext(StyleContext);

    return (<div style={{
        backgroundColor : context.backgroundColor, 
        fontSize: context.fontSize}}>

        Soy un consumidor del contexto mediante hooks
    </div>);
}
 
export default HookContextConsumer;