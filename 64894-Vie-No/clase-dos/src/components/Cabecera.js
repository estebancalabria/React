import "bootstrap/dist/css/bootstrap.css"

/*function Cabecera(){
    return (<header className="bg-dark text-light p-4">
        <h1>Bienvenidos a Rommerce</h1>
        <h2>El mejor E-Commerce programado en React</h2>
    </header>)
}*/

function Cabecera(props){
    return (<header className="bg-dark text-light p-4">
        <img src="logo192.png" alt="logo" style={{float:"left", width:"6em", marginRight:"2em"}}/>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
    </header>)
}

export default Cabecera;