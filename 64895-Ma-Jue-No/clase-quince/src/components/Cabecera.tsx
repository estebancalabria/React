
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

type CabeceraProps  = {
    titulo : string;
};

function Cabecera(props: CabeceraProps){
    return (<Mui.AppBar>
        <Mui.Toolbar>
            <Mui.IconButton sx={{marginRight:2}}>
                <MuiIcons.Menu />
            </Mui.IconButton>
            <Mui.Typography variant="h4">
                {props.titulo}
            </Mui.Typography>
        </Mui.Toolbar>
    </Mui.AppBar>)
};

export default Cabecera;