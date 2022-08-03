import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const OtroContador = (props) => {
    return (<Box textAlign="center" bgcolor="red" margin="5em">
        <Typography variant="caption">
            Contador : {props.numero}
        </Typography>
    </Box>);
}
 
export default OtroContador;