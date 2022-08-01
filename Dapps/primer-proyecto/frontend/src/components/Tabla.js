import "bootstrap/dist/css/bootstrap.css";

//desestructuracion de parametros en javascript
//<Tabla items={[{nombre:"Juan", apellido:"Perez"},{nombre...}]}
//export default function({items}){...}  
const Tabla = ({ items }) => {

    if (items?.length > 0) {
        /*const keys = [];
        const primero = items[0];
        for (let key in primero) {  //for in para recorrer las claves de un objeto
            keys.push(key);
            //keys = [...keys, key];  otra forma de hacer un push
        }*/
        const keys = Object.keys(items[0]);

        return (<table className="table">
            <thead>
                <tr>
                    {keys.map((key, index) => (<th key={index}>{key}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, index) => (
                        <tr key={index}>
                            {
                                keys.map((key) => (<td key={key}>
                                    {item[key]}
                                </td>))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>);
    }

    //Fragment, un elemento vacio en este caso. Exclusiovo de JSX
    return <></>;
}


export default Tabla;

