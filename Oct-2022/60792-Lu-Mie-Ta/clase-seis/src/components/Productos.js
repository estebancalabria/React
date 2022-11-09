import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Jello from 'react-reveal/Jello';

const Productos = (props) => {

    const navigate = useNavigate();

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((resp)=>{
            setProductos(resp.data);
        });
    },[])

    return (<>
        <h1>
            Pagina de productos
        </h1>
        <div>
            <button className="btn btn-primary float-end mb-2"
              onClick={()=>{
                navigate(-1);
              }}>
                Volver
             </button>
        </div>
        <table className="table align-middle">
            <thead className="bg-dark text-light">
                <th></th>
                <th>Nombre</th>
                <th>Descripcion</th>
            </thead>
            <tbody>
                {
                    productos.map((p)=>(
                        <tr key={p.id}>
                            <td>
                                <Jello>
                                   <img src={p.image} style={{width:"100px", height:"auto"}} alt={p.title} />
                                </Jello>
                            </td>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>);
}

export default Productos;