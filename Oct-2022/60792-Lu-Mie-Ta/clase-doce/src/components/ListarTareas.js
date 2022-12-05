import logoTareas from "../images/task.png"

export default function ListarTareas({ tareas, onAgregar, onEliminar }) {
    return (<>
        <div style={{ textAlign: "end" }}>
            <button onClick={onAgregar}>
                Agregar
            </button>
        </div>
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Realizada</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tareas.map((item) => (
                        <tr key={item.id}>
                            <th>
                                <img style={{ width: 30, height: 40 }}
                                    src={logoTareas} />
                            </th>
                            <td>{item.nombre}</td>
                            <td>{item.done ? "Si" : "No"}</td>
                            <td>
                                <button onClick={()=>{
                                    onEliminar(item.id)
                                }}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}