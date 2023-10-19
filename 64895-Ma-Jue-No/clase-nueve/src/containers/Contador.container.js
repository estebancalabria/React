import { useSelector } from "react-redux";
import Contador from "../components/Contador";


const ContadorContainer = ({children}) => {

    const valor = useSelector(store => store.contador);

    return (<Contador valor={valor}>
        {children}
    </Contador>);
}
 
export default ContadorContainer;