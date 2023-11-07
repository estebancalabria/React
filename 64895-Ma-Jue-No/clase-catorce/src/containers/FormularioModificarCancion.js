import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import crearAccion from "../redux/action-creators";

const FormularioModificarCancion = () => {

    const params = useParams();
    const cancion = useSelector(
        state => 
        state.canciones.filter(item => item.id == params.id)[0]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (<Formulario 
        campos={["nombre", "artista", "genero"]}
        item={cancion}
        onSubmit={(item)=>{
            let accion = crearAccion.modificarCancion(item);
            dispatch(accion);
            navigate(-1);
        }}
    />);
}
 
export default FormularioModificarCancion;