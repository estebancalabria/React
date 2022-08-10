import GrillaPersonas from "../components/GrillaPersonas";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        personas : state.personas
    }
}

export default connect(mapStateToProps)(GrillaPersonas);