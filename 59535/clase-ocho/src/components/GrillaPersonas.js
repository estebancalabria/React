import { Grid } from '@mui/material';
import FichaPersona from './FichaPersona';

const GrillaPersonas = ({ personas }) => {
    return (
        <Grid container spacing={2} marginTop="2em">
            {
                personas.map((persona) => (
                    <Grid item xs={4} key={persona.id}>
                        <FichaPersona {...persona} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default GrillaPersonas;