import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import Tabla from "../components/Tabla";
import crearAccion from "../redux/action-creators";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TablaCanciones = () => {

    const canciones = useSelector(state => state.canciones);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (<Tabla
        columnas={["nombre", "artista", "genero"]}
        items={canciones}
        renderAcciones={(item) => (<div className="text-end">
            <button className="btn btn-primary me-2"
                onClick={() => {
                    navigate("modificar/" + item.id);
                }}>
                Modificar
            </button>
            <button className="btn btn-danger" onClick={() => {
                Swal.fire({
                    title: `Esta seguro que quiere eliminar la cancion ${item.nombre}?`,
                    icon: 'warning',
                    showCancelButton: true
                }).then((resp) => {
                    if (resp.isConfirmed) {
                        const accion = crearAccion.eliminarCancion(item.id);
                        dispatch(accion);
                    }
                })
            }}>
                Eliminar
            </button>
        </div>)} />);
}

export default TablaCanciones;