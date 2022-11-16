import Contador from "../components/Contador";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        valor : state.contador
    }
}

//el connect es un hoc (high order component)
export default connect(mapStateToProps)(Contador);

