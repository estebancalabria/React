import { connect } from "react-redux";
import Loading from "../components/Loading";

function mapStateToProps(state){
    return {
        display : state.loading ? "block" : "none"
    }
}

export default connect(mapStateToProps)(Loading);