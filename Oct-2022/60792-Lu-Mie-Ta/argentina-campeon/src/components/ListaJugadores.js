import "bootstrap/dist/css/bootstrap.css";

export default function ListaJugadores({jugadores}){
    return <>
        <h1 className="text-center">Nuestros Herores</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Casaca</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                jugadores.map((jugador)=>(
                    <tr key={jugador.id}>
                        <td>{jugador.nombre}</td>
                        <td>{jugador.casaca}</td>
                        <td></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </>
}