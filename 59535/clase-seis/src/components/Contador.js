import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const Contador = (props) => {
    return (<Box textAlign="center" bgcolor="blue" marginTop="10em">
        <Typography variant="h1">{props.valor}</Typography>
    </Box>);
}

Contador.propTypes = {
    valor : PropTypes.number.isRequired
}
 
export default Contador;