import { Card, CardContent, Typography } from "@mui/material";

const FichaPersona = (props) => {
    return (<Card style={{height:"100%"}}>
        <CardContent>
            <Typography variant="h3">{props.nombre} {props.apellido}</Typography>
            <Typography variant="body1">{props.profesion}</Typography>
        </CardContent>
    </Card>);
}
 
export default FichaPersona;