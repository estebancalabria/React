import Decrementar from "../components/Decrementar";
import { connect } from "react-redux";
import { ACT_DECREMENTAR } from "../actions/action.types";

function mapStateToProps(state){
    return { 
        valor : state.contador
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAccion : ()=>{
            dispatch({
                type : ACT_DECREMENTAR
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decrementar);