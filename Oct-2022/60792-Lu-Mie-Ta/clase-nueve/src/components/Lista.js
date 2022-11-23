import "bootstrap/dist/css/bootstrap.css";

const Lista = ({titulo, items}) =>{
    return <ul className="list-group">
        <li className="list-group-item active">{titulo}</li>
        {
            items.map(({id, nombre})=>{
                return <li className="list-group-item" key={id}>
                    {nombre}
                </li>
            })
        }
    </ul>
}

export default Lista;