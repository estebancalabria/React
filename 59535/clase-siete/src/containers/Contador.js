import Contador from "../components/Contador";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        valor : state.value
    }
}

export default connect(mapStateToProps)(Contador);