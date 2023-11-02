import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

const Tabla = ({ columnas, items, renderAcciones }) => {

    //obj.nombre === obj["nombre"]
    return (<Bs.Table border={1} striped={true} >
        <thead>
            <tr>
                {
                    columnas.map((col) => (
                        <th key={col} className="bg-info">
                            {col }
                        </th>
                    ))
                }
                {
                    renderAcciones && <th className="bg-info"></th>
                }
            </tr>
        </thead>
        <tbody>
            {
                items.map((item,index)=>(
                    <tr key={index}>
                       {
                           columnas.map((col)=>(
                               <td key={col}> {item[col]} </td>
                           ))
                       }      
                       {
                           renderAcciones && <td>{renderAcciones(item)}</td>
                       }
                    </tr>
                ))
            }
        </tbody>
    </Bs.Table>);
}

export default Tabla;