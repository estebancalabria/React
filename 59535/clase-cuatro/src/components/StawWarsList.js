import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import axios from "axios";

const URL = "https://swapi.dev/api/people";

class StarWarsList extends Component {

    //useState
    state = {results : []}

    //lo mismo que hacia en el useEffect
    componentDidMount(){
        axios.get(URL).then((resp)=>{
            this.setState({results : resp.data.results});
        })
    }


    render() { 
        return (<table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Altura</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.results.map((personaje)=>(
                        <tr key={personaje.name}>
                            <td>{personaje.name}</td>
                            <td>{personaje.gender}</td>
                            <td>{personaje.height} cm.</td>
                        </tr>   
                    ))
                }
            </tbody>
        </table>);
    }
}
 
export default StarWarsList;