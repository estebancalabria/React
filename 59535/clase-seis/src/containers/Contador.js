import Contador from "../components/Contador";
import { connect } from "react-redux"; 
//El connect Conecta al componente con redux y lo convierte en un container

function mapStateToProps(state){
    //toma el state y devuelve un json con las props del componente
    return {
        valor  : state.value
    }
}

//curring en vez connect(mapStatetoProps,Contador)
export default connect(mapStateToProps)(Contador);
