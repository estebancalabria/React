import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import {useState} from "react";

type LoginFormProps = {
    onLogin: (usuario:string,password:string) => void
}

const LoginForm = ( props : LoginFormProps) => {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    return (<Mui.Paper sx={{padding:5, maxWidth:"33vw"}} >
        <Mui.Typography variant="h4">Login</Mui.Typography>
        <form>
        <Mui.Box sx={{marginBottom:3, marginTop:3}}>
             <Mui.TextField fullWidth  type="text" label="usuario" onChange={(evt)=>{
                setUsuario(evt.target.value);
             }}  />
        </Mui.Box>
        <Mui.Box sx={{marginBottom:3}}>
            <Mui.TextField fullWidth type="password" label="password" onChange={(evt)=>{
                setPassword(evt.target.value);
            }} />
        </Mui.Box>
        <Mui.Box>
            <Mui.Button variant="contained" onClick={(()=>{
                props.onLogin(usuario,password);
            })}>
                Login
            </Mui.Button>
        </Mui.Box>
        </form>
    </Mui.Paper>);
}
 
export default LoginForm;
