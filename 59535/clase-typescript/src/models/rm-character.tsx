
export default interface RmCharacter{
    id: number;
    name: string;
    status? : string;
    species: string | undefined;
    type : any;
    gender: string;
    image: string;
}