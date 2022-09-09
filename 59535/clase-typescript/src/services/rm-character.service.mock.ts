import RmCharacter from "../models/rm-character";
import RmCharacterServiceInterface from "./rm-character.service.interface";

export default class RmCharacterServiceMock implements RmCharacterServiceInterface{

    getAll():Promise<RmCharacter[]>{
        return new Promise<RmCharacter[]>((accept)=>{
            accept([
                {id:1, name:"Ariel", gender:"male", species:"Human", status:"Alive", type:"", image:"https://picsum.photos/200?1"},                
                {id:2, name:"Nicolas", gender:"male", species:"Human", status:"Alive", type:"", image:"https://picsum.photos/200?2"},                
                {id:3, name:"Esteban", gender:"male", species:"Human", status:"Alive", type:"", image:"https://picsum.photos/200?3"},                
                {id:4, name:"Javier", gender:"male", species:"Human", status:"Alive", type:"", image:"https://picsum.photos/200?3"},                
                {id:5, name:"Lisandro", gender:"male", species:"Human", status:"Alive", type:"", image:"https://picsum.photos/200?3"},                
            ])
        });     
    }
}