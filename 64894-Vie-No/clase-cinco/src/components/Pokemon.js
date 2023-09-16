import React, { Component } from 'react';
import axios from 'axios';
import Carta from './Carta';
import Swal from 'sweetalert2';


class Pokemon extends Component {
    state = {
        pokemones: []
    }

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
            this.setState({
                pokemones: resp.data.results
            })
        })
    }

    render() {
        return (<div>
            <h3 className="text-center bg-success text-light">Pokemon Api</h3>
            <div className='row'>
                {
                    this.state.pokemones.map((pokemon, index) => (
                        <div className="col-3 mb-3" key={index}>
                            <Carta titulo={pokemon.name}
                                imagen={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} 
                                onInfo={(parametro)=>{
                                    Swal.fire("Info del pokemon", "Aca se muestra la info del pokemon " + parametro)
                                }}/>
                            {/*<div className="card h-100 shadow">
                                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(index+1)+".png"} alt={pokemon.name} />
                                <div className="card-body">
                                    <h1 className="card-title">{pokemon.name}</h1>
                                </div>
                            </div>*/}
                        </div>))
                }
            </div>
        </div>);
    }
}

export default Pokemon;