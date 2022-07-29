import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

//const Tabla = (props) => {
const Tabla = ({items}) => {
    //if (items != null) && (items != undefined) && (items.length) && (items.length>0)
    if (items?.length>0){
        let claves = [];
        for (let clave in items[0]){
            claves.push(clave);
        }

        return (<Bs.Table>
            <thead>
                <tr>
                    {claves.map((clave)=>(<th key={clave}>{clave}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, index)=>(
                        <tr key={index}>
                            { claves.map((clave)=>(<td key={clave}>{item[clave]}</td> ))}
                        </tr>
                    ))
                }
            </tbody>
        </Bs.Table>);    
    } else {
        return <></>
    }
}
 
export default Tabla;