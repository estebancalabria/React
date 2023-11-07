import { useDispatch } from "react-redux";
import Formulario from "../components/Formulario";
import { useNavigate } from "react-router-dom";
import crearAccion from "../redux/action-creators";

const FormularioAgregarCancion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (<Formulario
        campos={["nombre", "artista", "genero"]}
        onSubmit={(cancion) => {
            let accion = crearAccion.agregarCancion(cancion);
            dispatch(accion);
            navigate(-1);
        }}
    />);
}

export default FormularioAgregarCancion;