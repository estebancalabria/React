import { useSelector, useDispatch } from "react-redux";
import { Producto } from "../models/producto.model";
import { ACT_AGREGAR_AL_CARRITO, StoreState } from "../redux/store";
import Grilla from "../components/Grilla";
import Carta from "../components/Carta";

const GrillaProductos = () => {

    const productos : Producto[] = useSelector<StoreState>(state => state.productos) as Producto[];
    const dispatch = useDispatch();

    return (<Grilla 
        componentes={productos.map((producto)=>(
            <Carta key={producto.id}
                titulo={producto.nombre as string}
                descripcion={producto.descripcion as string}
                imagen={producto.imagen as string}
                textoAccion="Agregar al Carrito"
                onAccion={
                    ()=>{
                        dispatch({
                            type: ACT_AGREGAR_AL_CARRITO,
                            id : producto.id
                        })
                    }
                }
            />
        ))}
    />);
}
 
export default GrillaProductos;

