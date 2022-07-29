import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";

class ListaCartas extends Component {
    render() {
        return (<Bs.Row>
            {
                this.props.items.map(({ titulo, contenido, imagen }) => (
                    <Bs.Col key={titulo}>
                        <Bs.Card>
                            <Bs.Card.Img src={imagen} />
                            <Bs.Card.Body>
                                <Bs.Card.Title>{titulo}</Bs.Card.Title>
                                <Bs.Card.Text>{contenido}</Bs.Card.Text>
                            </Bs.Card.Body>
                        </Bs.Card>
                    </Bs.Col>
                ))
            }
        </Bs.Row>);
    }
}

export default ListaCartas;
