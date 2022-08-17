import "bootstrap/dist/css/bootstrap.css";

const ListaDeAlumnos = ({alumnos}) => {
    return (<table className="table">
         <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Profesion</th>
                <th></th>
            </tr>
         </thead>
         <tbody>
            {
                alumnos.map((alumno)=>(
                    <tr key={alumno.id}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.profesion}</td>
                        <td></td>
                    </tr>
                ))
            }
         </tbody>
    </table>);
}
 
export default ListaDeAlumnos;