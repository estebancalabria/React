import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";

const ListaProductosRedux = () => {

    const productos = useSelector(store=>store.productos);

    return (<ul className="list-group w-50 mx-auto">
        <li className="list-group-item active">Mis Productos</li>
        {
            productos.map((p)=>(
                <li className="list-group-item" key={p.id}>{p.nombre}</li>
            ))
        }
    </ul>);
}
 
export default ListaProductosRedux;