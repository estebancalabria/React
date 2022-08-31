import { Box, Typography, Button } from "@mui/material";


const Character = ({nombre, hp, xp , nivel, onAtacar}) => {
    return (<Box padding="2em" border="1px solid" width="30%" marginX="auto" 
       marginTop="4em" textAlign="center">
        <Typography variant="h2">{nombre}</Typography>
        <Typography variant="body1">Hp : {hp}</Typography>
        <Typography variant="body1">Xp : {xp}</Typography>
        <Typography variant="body1">Nivel : {nivel}</Typography>
        
        <Button variant="contained" onClick={onAtacar}>Atacar</Button>
        <Button variant="outlined">Ser Atacado</Button>

    </Box>);
}
 

export default Character;