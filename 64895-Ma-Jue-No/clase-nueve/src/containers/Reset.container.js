import { connect } from "react-redux"
import * as types from "../actions/action-types";
import Boton from "../components/Boton";

function mapStateToProps(state){
    return {
       texto : `Reset ${state.contador}`
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAccion : ()=>{
            dispatch({
                type:types.ACT_RESET
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boton);