import * as Mui from "@mui/material";
import { useState } from "react";

type LoginFormProps = {
    onLogin: (usuario: string, password: string) => boolean
}

const LoginForm = (props: LoginFormProps) => {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [isBadLogin, setIsBadLogin] = useState(false);

    return (<Mui.Paper sx={{ padding: 5, maxWidth: "33vw"}} >
        <Mui.Typography variant="h4">Login</Mui.Typography>
        <form>
            <Mui.Box sx={{ marginBottom: 3, marginTop: 3 }}>
                <Mui.TextField fullWidth type="text" label="usuario" value={usuario}
                    onChange={(evt) => {
                        setUsuario(evt.target.value);
                    }} />
            </Mui.Box>
            <Mui.Box sx={{ marginBottom: 3 }}>
                <Mui.TextField fullWidth type="password" label="password" value={password}
                    onChange={(evt) => {
                        setPassword(evt.target.value);
                    }} />
            </Mui.Box>
            {
                isBadLogin && <Mui.Alert severity="error" sx={{ marginBottom: 3 }}>
                    Credenciales Incorrectas
                </Mui.Alert>
            }

            <Mui.Box>
                <Mui.Button variant="contained" onClick={(() => {
                    setIsBadLogin(!props.onLogin(usuario, password));
                    setUsuario("");
                    setPassword("")
                })}>
                    Login
                </Mui.Button>
            </Mui.Box>
        </form>
    </Mui.Paper>);
}

export default LoginForm;
