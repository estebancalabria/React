import "bootstrap/dist/css/bootstrap.css";

interface CabeceraProps{
    titulo:string;
    subtitulo:string
}

export default (props:CabeceraProps) =>{
    return <header className="alert alert-info text-center">
        <h1 className="display-2">{props.titulo}</h1>
        <h2 className="display-3">{props.subtitulo}</h2>
    </header>
}