import React, { Component } from 'react';  //snippet imrc
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Carta from './Carta';

class PersonajesRickAndMorty extends Component { //snippet cc o ccc
    state = { personajes: [] } //analogo al useState en los funcionales

    componentDidMount() { //analogo al useEffect(()=>{}, [])
        axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
            this.setState({ personajes: resp.data.results });
        })
    }

    render() {
        return (<div className="row">
            {
                this.state.personajes.map((personaje) => (
                    <div key={personaje.id} className='col-sm-3'>
                        <Carta 
                            imagen={personaje.image}
                            titulo={personaje.name}
                            texto={personaje.species + " " + personaje.status} />
                    </div>
                ))
            }
        </div>);
    }
}

export default PersonajesRickAndMorty;