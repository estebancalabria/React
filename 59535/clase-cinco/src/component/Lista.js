import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

//const Lista = ({titulo,items}) => {
const Lista = (props) => {
    return (<Bs.ListGroup>
        {
            props.titulo && <Bs.ListGroupItem active>{props.titulo}</Bs.ListGroupItem> 
        }
        {
            props.items.map((item,index)=>(
                <Bs.ListGroupItem key={index}>
                    {item}
                </Bs.ListGroupItem>
            ))
        }
    </Bs.ListGroup>);
}
 
export default Lista;