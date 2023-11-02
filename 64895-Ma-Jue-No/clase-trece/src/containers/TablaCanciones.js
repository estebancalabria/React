import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import Tabla from "../components/Tabla";

const TablaCanciones = () => {

    const canciones = useSelector(state => state.canciones);

    return (<Tabla 
        columnas={["nombre","artista","genero"]}
        items={canciones}
        renderAcciones={(item)=>(<div className="text-end">
            <button className="btn btn-danger" onClick={()=>{
                alert(item.id)
            }}>
                Eliminar
            </button>
        </div>)}/>);
}
 
export default TablaCanciones;