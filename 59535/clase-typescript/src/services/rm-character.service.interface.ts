import RmCharacter from "../models/rm-character";

export default interface RmCharacterServiceInterface{
    getAll():Promise<RmCharacter[]>;
}