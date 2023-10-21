import { connect } from "react-redux"
import Parrafo from "../../components/Parrafo"

function mapStateToProps(state){
    return {
        texto : state.lorem
    }
}

export default connect(mapStateToProps)(Parrafo);