import "bootstrap/dist/css/bootstrap.css";

function Cabecera(props){
   return (<header className="alert alert-primary text-center mb-0">
        <h1 className="display-1">{ props.titulo }</h1>
    </header>);
}

//ASI : Automatics semicolon Insertion
export default Cabecera;
