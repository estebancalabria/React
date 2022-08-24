import "bootstrap/dist/css/bootstrap.css";

const ListaDeAlumnos = ({alumnos, onEliminar, onEditar}) => {
    document.title = "Lista de Alumnos";

    return (<table className="table">
         <thead>
            <tr>
                <th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Profesion</th>
            </tr>
         </thead>
         <tbody>
            {
                alumnos.map((alumno)=>(
                    <tr key={alumno.id}>
                        <td >
                            <button className="btn btn-success me-1" 
                            onClick={()=>{onEditar(alumno.id)}}>
                                &#9999;&#65039;
                            </button>

                            <button className="btn btn-danger" 
                            onClick={()=>{onEliminar(alumno.id)}}>
                                &#128465;
                            </button>
                        </td>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.profesion}</td>
                    </tr>
                ))
            }
         </tbody>
    </table>);
}
 
export default ListaDeAlumnos;