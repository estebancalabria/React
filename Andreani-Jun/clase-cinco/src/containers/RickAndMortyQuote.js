import Quote from "../components/Quote";
import httpGet from "../hoc/httpGet";

function mapResponseToProps(resp){
    return{
        quote : resp.name,
        author : resp.species
    }
}

export default httpGet("https://rickandmortyapi.com/api/character/3")(mapResponseToProps)(Quote);