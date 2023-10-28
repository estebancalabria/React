import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

const Lista = ({ titulo, items, renderAccionItem }) => {
    return (<Bs.ListGroup className="w-100">
        <Bs.ListGroupItem active={true}>{titulo}</Bs.ListGroupItem>
        {
            items.map((item) => (
                <Bs.ListGroupItem key={item.id}>
                    {item.nombre}

                    {
                        renderAccionItem
                        && <div className="float-end">
                            {renderAccionItem(item.id)}
                        </div>
                    }
                </Bs.ListGroupItem>
            ))
        }
    </Bs.ListGroup>);
}

export default Lista;