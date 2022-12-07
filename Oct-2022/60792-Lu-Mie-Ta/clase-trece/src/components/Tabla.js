import "bootstrap/dist/css/bootstrap.css";

export default function Tabla({ items }) {

    if ((items) && (items.length > 0)) {
        return (<table className="table">
            <thead>
                <tr>
                    {
                        Object.keys(items[0]).map((key) => (
                            <th key={key}> {key}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, index) => (
                        <tr key={index}>
                            {
                                Object.keys(items[0]).map((key) => (
                                    <td>{item[key]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>)
    }

    return (<h1>No hay elementos que mostrar</h1>);
}
