import OtroMostrarValorPuro from "../components/OtroMostrarValorPuro";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        value : state.contador
    }
}

export default connect(mapStateToProps)(OtroMostrarValorPuro);