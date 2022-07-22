import "bootstrap/dist/css/bootstrap.css";

const canciones = [
    { id: 1, nombre: "Rondamon", artista: "Suelto (ft Juanse)" },
    { id: 2, nombre: "Hero", artista: "Alesso" },
    { id: 3, nombre: "Crimen", artista: "Gustavo Cerati" },
    { id: 4, nombre: "Don't you worry", artista: "Black Eyed Peas" },
    { id: 5, nombre: "Sharks", artista: "Imagine Dragons" },
    { id: 6, nombre: "Fix You", artista: "ColdPlay" },
    { id: 7, nombre: "Rondamon", artista: "Suelto (ft Juanse)" },
    { id: 8, nombre: "Hero", artista: "Alesso" }
]

const Biblioteca = (props) => {
    return (<div className="row">
        {
            canciones.map((cancion) => (
                <div className="col-3 mb-3">
                    <div className="card w-100">
                        <img className="card-img-top h-50"
                            alt={cancion.nombre}
                            src={"https://picsum.photos/300?" + cancion.id} />
                        <div className="card-body">
                            <h4 className="card-title">{cancion.nombre}</h4>
                            <p className="card-text">{cancion.artista}</p>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-primary">
                                Escuchar &#127925;
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>);
}

export default Biblioteca;

