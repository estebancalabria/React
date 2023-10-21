import { useSelector } from "react-redux";
import Parrafo from "../../components/Parrafo";

const ParrafoLoremHooks = () => {
    
    const lorem = useSelector(state => state.lorem);

    return (<Parrafo texto={lorem} />);
}
 
export default ParrafoLoremHooks;