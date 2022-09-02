import { Box, Typography, Button } from "@mui/material";


const Character = ({ nombre, hp, xp, nivel, alive, onAtacar, onDamage }) => {
    return (<Box padding="2em" border="1px solid" width="30%" marginX="auto"
        marginTop="4em" textAlign="center">
        <Typography variant="h2">{nombre}</Typography>
        {alive ?
            <Typography variant="h5" color="green">Vivo</Typography> :
            <Typography variant="h5" color="red">Muerto</Typography>
        }
        <Typography variant="body1">Hp : {hp}</Typography>
        <Typography variant="body1">Xp : {xp}</Typography>
        <Typography variant="body1">Nivel : {nivel}</Typography>

        <Button variant="contained" disabled={!alive} onClick={onAtacar}>Atacar</Button>
        <Button variant="outlined" style={{display:"none"}} disabled={!alive} onClick={onDamage}>Ser Atacado</Button>

    </Box>);
}


export default Character;