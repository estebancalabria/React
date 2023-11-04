import * as Mui from "@mui/material";
import * as MuiIncons from "@mui/icons-material"

const Cabecera = ({titulo}) => {
    return (<Mui.AppBar position="static">
        <Mui.Toolbar>
            <Mui.IconButton>
                <MuiIncons.Menu />
            </Mui.IconButton>
            <Mui.Typography variant="h6" align="center" sx={{ml:2}}>{titulo}</Mui.Typography>
        </Mui.Toolbar>
    </Mui.AppBar>);
}
 
export default Cabecera;