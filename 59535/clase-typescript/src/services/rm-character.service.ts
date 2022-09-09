import RmCharacter from "../models/rm-character";
import axios from "axios";
import RmCharacterServiceInterface from "./rm-character.service.interface";

export default class RmCharacterService implements RmCharacterServiceInterface{

    getAll():Promise<RmCharacter[]>{
        return new Promise<RmCharacter[]>((accept)=>{
            axios.get("https://rickandmortyapi.com/api/character").then((resp)=>{
                accept(resp.data.results);
            });
        });     
    }
}