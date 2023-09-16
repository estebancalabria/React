
const Carta = ({ titulo, imagen, descripcion, datosAdicionales, onInfo }) => {
    return (
        <div className="card w-100 h-100 shadow">
            { imagen ? <img className="card-imd-top" src={imagen} alt={titulo} /> : <></> }
            <div className="card-body">
                <h3 className="card-title text-center">{titulo}</h3>
                <div className="card-test text-center">
                    {descripcion && <h4>{descripcion}</h4>}
                    {datosAdicionales && <h5>{datosAdicionales}</h5>}
                </div>
            </div>
            {
                onInfo && <div className="card-footer text-end">
                    {/*<button className="btn btn-primary"  onClick={onInfo}> */}
                    <button className="btn btn-primary" onClick={()=>{onInfo(titulo)}}>
                        Mas Informacion...
                    </button>
                </div>
            }
        </div>);
}

export default Carta;