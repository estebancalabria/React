import * as Mui from "@mui/material";
import { useDispatch } from "react-redux";
import Actions from "../actions/actions";

const BotoneraPelea = () => {

    //mapDispatchToProps
    var dispatch = useDispatch();

    return (<Mui.ButtonGroup>
        <Mui.Button variant="contained" onClick={()=>{
            dispatch({
                type : Actions.GAIN_XP,
                payload : Math.round(Math.random() * 100)
            })
        }}>
            Ganar Experiencia
        </Mui.Button>
        
        <Mui.Button variant="outlined" onClick={()=>{
            dispatch({
                type : Actions.TAKE_DAMAGE,
                payload : Math.round(Math.random() * 1000)
            })
        }}>
            Recibir Daño
        </Mui.Button>
    </Mui.ButtonGroup>);
}
 
export default BotoneraPelea;