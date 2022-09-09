import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import RmCharacter from "../models/rm-character";
import RmCharacterServiceInterface from "../services/rm-character.service.interface";


interface PersonajeProps{
    service:RmCharacterServiceInterface
    titulo:string
}

export default ({service, titulo}:PersonajeProps)=>{

    //const service = props.service;
    //const service : RmCharacterService = new RmCharacterService();
    //const service : RmCharacterServiceMock = new RmCharacterServiceMock();
    //const service : RmCharacterServiceInterface = new RmCharacterServiceMock();
    //const service : RmCharacterServiceInterface = new RmCharacterService();

    const [personajes, setPersonajes] = useState<RmCharacter[]>([]);
    useEffect(()=>{
        service.getAll().then((resp:RmCharacter[])=>{
            setPersonajes(resp);
        })
    }, [titulo]);

    return (<div className="row">
        <div>{titulo}</div>
        {
            personajes.map((personaje:RmCharacter)=>(
                <div className="col-3 mb-2" key={personaje.id}>
                    <div className="card bg-secondary w-100 h-100">
                        <img className="card-img-top" src={personaje.image} 
                             style={{height:"150px"}}  />
                        <h3 className="card-title text-light text-center">
                            {personaje.name}
                        </h3>
                        <p className="card-text">
                            {personaje.name} is a {personaje.gender} and its {personaje.status}
                        </p>
                    </div>
                </div>    
            ))
        }
    </div>);
}
