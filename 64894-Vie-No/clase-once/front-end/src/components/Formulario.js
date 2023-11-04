import * as Mui from "@mui/material";
import { useState } from "react";

const Formulario = ({ campos, camposOpcion, onSubmit }) => {

    let nombresCamposOpcion = [];
    for (let campo in camposOpcion) {
        nombresCamposOpcion.push(campo);
    }

    let [estado, setEstado] = useState({});

    return (<Mui.Paper sx={{ p: 2, mt: 2 }}>
        <form>
            {
                campos.map((campo) => (
                    <Mui.FormGroup key={campo}>
                        <Mui.InputLabel>{campo}</Mui.InputLabel>
                        <Mui.TextField onChange={(evt)=>{
                            let newState = {...estado};
                            newState[campo] = evt.target.value;
                            setEstado(newState);
                        }}/>
                    </Mui.FormGroup>
                ))
            }
            {
                nombresCamposOpcion && nombresCamposOpcion.map((campo, index) => (
                    <Mui.FormControl fullWidth key={index}>
                        <Mui.FormLabel>{nombresCamposOpcion[index]}</Mui.FormLabel>
                        <Mui.Select onChange={(evt)=>{
                            let newState = {...estado};
                            newState[campo] = evt.target.value;
                            setEstado(newState);
                        }}>
                            {
                                camposOpcion[campo].map((opc) => (
                                    <Mui.MenuItem key={opc} value={opc}>{opc}</Mui.MenuItem>
                                ))
                            }
                        </Mui.Select>
                    </Mui.FormControl>
                ))
            }
            <Mui.Box textAlign="end" >
                <Mui.Button variant="contained" sx={{ mt: 3 }} onClick={()=>{
                    onSubmit(estado);
                }}>
                    Submit
                </Mui.Button>
            </Mui.Box>
        </form>
    </Mui.Paper>);
}

export default Formulario;