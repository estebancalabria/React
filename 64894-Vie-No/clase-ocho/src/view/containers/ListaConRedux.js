import { useSelector } from "react-redux";
import Lista from "../components/Lista";

const ListaConRedux = () => {

    const items = useSelector((state)=>(state.tareas));
    return (<Lista items={items} />);
}
 
export default ListaConRedux;   