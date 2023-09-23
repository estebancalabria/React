import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const Productos = ({titulo, ...restOfProps}) => {

    let [productos, setProductos] = useState([]); //Inicializamos con un []
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3001/productos").then((resp)=>{
            setProductos(resp.data);
        })
    },[]);

    return (<main>
        <h1>{titulo}</h1>

        <button className="btn btn-success text-center w-100 mb-3" onClick={(na)=>{
            navigate("/");
        }}>
            Volver
        </button>

        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>         
                    <th></th>           
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto)=>(
                        <tr key={producto.nombre}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>
                                <button className="btn btn-primary float-end" onClick={()=>{
                                    navigate(`/productos/${producto.id}`)
                                }}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </main>);
}

export default Productos;