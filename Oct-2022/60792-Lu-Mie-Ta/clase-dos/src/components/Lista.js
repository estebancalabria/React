import "bootstrap/dist/css/bootstrap.css";

const Lista = ({titulo, items}) =>{
    return (<ul className="list-group">
        <li className="list-group-item active">{titulo}</li>
        {
            items.map((item, index)=>(
                <li className="list-group-item" key={index}>{item}</li>
            ))
        }
    </ul>)
}

export default Lista;
