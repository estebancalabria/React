import Lista from "../components/Lista";
import fromUrl from "../hoc/fromUrl";
import ICharacter from "../models/character.interface";
import IRmResults from "../models/rmresult.interface";

function mapResponseToProps(response:IRmResults){
    return {
        items : response.results.map((res:ICharacter)=>(res.name))
    }
}

export default fromUrl("https://rickandmortyapi.com/api/character")(mapResponseToProps)(Lista);