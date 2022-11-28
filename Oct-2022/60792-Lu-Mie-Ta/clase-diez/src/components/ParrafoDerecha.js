import "bootstrap/dist/css/bootstrap.css"

//No le pongo return porque en la => le pongo () en vez de {}
const ParrafoDerecha = ({texto, style}) =>(
    <p className="text-end" style={style}>
        {texto}
    </p>
)

export default ParrafoDerecha;