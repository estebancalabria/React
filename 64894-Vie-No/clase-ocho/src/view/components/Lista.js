import "bootstrap/dist/css/bootstrap.css";

const Lista = ({items}) => {
    return (<ul className="list-group">
        <li className="list-group-item active">Mi Lista</li>
        {
            items.map((item) =>(
                <li className="list-group-item">{item.nombre}</li>
            ))
        }

    </ul>);
}
 
export default Lista;