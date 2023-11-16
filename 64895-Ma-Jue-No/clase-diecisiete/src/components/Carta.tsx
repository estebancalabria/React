import * as Mui from "@mui/material";

type CartaProps = {
    titulo: string,
    descripcion: string,
    imagen: string,
    textoAccion?: string,
    onAccion?:()=>void;
}

const Carta = (props: CartaProps) => {
    return (<Mui.Card sx={{ with: "100%" }}>
        <Mui.CardMedia
            sx={{ height: 140 }}
            image={props.imagen}
            title={props.titulo}
        />
        <Mui.CardContent>
            <Mui.Typography gutterBottom variant="h5" component="div">
                {props.titulo}
            </Mui.Typography>
            <Mui.Typography variant="body2" color="text.secondary">
                {props.descripcion}
            </Mui.Typography>
        </Mui.CardContent>
        <Mui.CardActions>
            {
                props.textoAccion && <Mui.Button size="small" 
                    onClick={()=>{props.onAccion!()}}>
                    {props.textoAccion}
                </Mui.Button>
            }

        </Mui.CardActions>
    </Mui.Card>);
}

export default Carta;