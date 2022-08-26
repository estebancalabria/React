import "bootstrap/dist/css/bootstrap.css";

export default ({titulo,subtitulo})=>(
    <header className="alert alert-primary text-center">
        <h1 className="display-1">{titulo}</h1>
        <h2 className="display-2">{subtitulo}</h2>
    </header>
);