import { Box } from "@mui/system";
import {  Button } from "@mui/material";

const Incrementar = ({valor, onIncrementar}) => {
    return (<Box textAlign="center">
        <Button variant="contained" onClick={onIncrementar}>
            Incrementar ({valor})
        </Button>
    </Box>);
}
 
export default Incrementar;