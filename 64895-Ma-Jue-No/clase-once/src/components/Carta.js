import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap"

const Carta = ({titulo, subtitulo, imagen, texto, accion, onAccion}) => {
    return (<div className="w-100 h-100">
        <Bs.Card className="h-100">
            <Bs.CardImg src={imagen} alt="imagen" style={{maxHeight:"200px"}} />
            <Bs.CardBody>
                <Bs.CardTitle>{titulo}</Bs.CardTitle>
                <Bs.CardSubtitle className="text-muted">{subtitulo}</Bs.CardSubtitle>
                <Bs.CardText className="mt-2">
                    {texto}
                </Bs.CardText>
            </Bs.CardBody>
            <Bs.CardFooter className="text-end">
                <Bs.Button variant="primary" onClick={()=>{onAccion()}}>
                    {accion}
                </Bs.Button>
            </Bs.CardFooter>
        </Bs.Card>
    </div>);
}
 
export default Carta;