import "bootstrap/dist/css/bootstrap.css";

const Lista = ({ titulo, items, onEliminar }) => {
    return (<ul className="list-group">
        <li className="list-group-item active">{titulo}</li>
        {
            items.map((item, index) => {
                return (<li key={index} className="list-group-item">
                    {item.nombre}

                    <button className="btn btn-danger float-end"
                        onClick={() => {
                            onEliminar(item.id)
                        }}>
                        -
                    </button>
                </li>)
            })
        }

    </ul>);
}

export default Lista;