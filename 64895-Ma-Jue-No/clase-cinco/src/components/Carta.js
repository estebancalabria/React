import "bootstrap/dist/css/bootstrap.css";

const Carta = ({imagen, titulo, texto}) => {
    return (<div className="shadow card text-center w-100">
        {imagen && <img className="card-img-top" src={imagen} alt={titulo} />}
        <div className="card-body">
            <h3 className="card-title">{titulo}</h3>
            <p className="card-text">
                {texto}
            </p>
        </div>
    </div>);
}
 
export default Carta;