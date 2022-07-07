import * as Mui from "@mui/material";
import { useSelector } from "react-redux";

const HojaDePersonaje = () => {

    //mapStateToProps
    var heroe = useSelector(store => store);

    return (
        <Mui.Card>
            <Mui.CardActionArea>
                <Mui.CardHeader title={heroe.nombre} 
                                style={{color: heroe.alive ? 'green' : 'red'}} 
 />
                <Mui.CardContent>
                    <Mui.Typography variant="body1"> Hp : {heroe.hp} </Mui.Typography>
                    <Mui.Typography variant="body1"> XP : {heroe.xp} </Mui.Typography>
                    <Mui.Typography variant="body1"> LEVEL : {heroe.level} </Mui.Typography>
                    <Mui.Typography variant="body1" color={heroe.alive ? "green" : "red"}> 
                        Estado : {heroe.alive ? "VIVO" : "MUERTO"} 
                    </Mui.Typography>
                </Mui.CardContent>
            </Mui.CardActionArea>
        </Mui.Card>
    );
}

export default HojaDePersonaje;