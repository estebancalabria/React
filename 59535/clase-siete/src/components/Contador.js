import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Contador = ({valor}) => {
    return (<Box textAlign="center" alignItems="center" justifyContent="center">
        <Typography variant="h2">Contador : {valor}</Typography>
    </Box>);
}
 
export default Contador;