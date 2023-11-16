import * as Mui from "@mui/material";
import GrillaProductos from "../containers/GrillaProductos";

const Secret = () => {
    return (<Mui.Box>
        Esto se ve solo si estoy logueado
        <GrillaProductos />
    </Mui.Box>);
}
 
export default Secret;