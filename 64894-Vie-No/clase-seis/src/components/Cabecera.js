import "bootstrap/dist/css/bootstrap.css";

const Cabecera = ({titulo, subtitulo})=>{
    return <header className="bg-primary p-2 m-2 text-light text-center">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
    </header>
}

export default Cabecera