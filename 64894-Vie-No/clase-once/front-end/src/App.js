import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import * as Mui from "@mui/material";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Cabecera from "./components/Cabecera";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [items, setItems] = useState([]);
  useEffect(()=>{
      axios.get("http://localhost:3001/personas").then((resp)=>{
        setItems(resp.data)
      }).catch(()=>{
        setItems([
          { nombre: "We Will Rock You", artista: "Queen", genero: "Rock" },
          { nombre: "Breakin Ball", artista: "Miley Cyrus", genero: "Balada" },
          { nombre: "La Ciudad de La furia", artista: "Soda Estereo", genero: "Rock" },
        ])
      })
  },[])
 
  return (
    <BrowserRouter>
      <Cabecera titulo="Base de Datos de Canciones" />
      <Mui.Container>
        <Routes>
          <Route path="/" element={
            <Mui.Box>
              <Mui.Paper sx={{ p: 2, mt: 2 }}>
                <Mui.Typography variant="h5">Mi Lista de Canciones </Mui.Typography>
                <Mui.Box textAlign="end">
                  <Link to="agregar">Nueva Cancion</Link>
                </Mui.Box>
                <Tabla
                  columnas={["nombre", "apellido", "profesion"]}
                  items={items}
                />
              </Mui.Paper>
            </Mui.Box>
          } />
          <Route path="/agregar" element={<Mui.Paper sx={{ p: 2, mt: 2 }}>
            
            <Mui.Typography variant="h5">Agregar Cancion </Mui.Typography>
            <Formulario
              campos={["nombre", "artista"]}
              camposOpcion={{ genero: ["Rock", "Pop", "Balada", "Clasica"] }}
              onSubmit={(elemento) => { 
                alert(JSON.stringify(elemento));
              }} />
          </Mui.Paper>} />

        </Routes>


      </Mui.Container>
    </BrowserRouter>
  );
}

export default App;
