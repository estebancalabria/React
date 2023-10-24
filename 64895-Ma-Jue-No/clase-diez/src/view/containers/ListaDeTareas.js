import { useDispatch, useSelector } from "react-redux";
import Lista from "../components/Lista";
import crearAccion from "../../actions/action-creators";

const ListaDeTareas = () => {

    //El dispatch es un metodo que hace llegar una accion al reducer
    const dispatch = useDispatch();
    const tareas = useSelector(state => state.tareas);

    return (
        <Lista
            titulo="Mis Tareas"
            items={tareas}
            onEliminar={(id) => {
                dispatch(crearAccion.eliminarTarea(id))
            }}
        />
    );
}

export default ListaDeTareas;