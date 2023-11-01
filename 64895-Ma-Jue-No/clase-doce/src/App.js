import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";


function App() {

  

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Bs.Alert variant="info">
          <Bs.AlertHeading className="text-center">React Song Database</Bs.AlertHeading>
        </Bs.Alert>
        <Bs.Container>
          <Routes>
            <Route path="" element={
              <div>
                <h1>Lista de Canciones</h1>
                <div className="text-end">
                  <Link to="agregar">Agregar Cancion</Link>
                </div>
                <Tabla
                  columnas={["nombre", "apellido"]}
                  items={[
                    { nombre: "Juan", apellido: "Perez" },
                    { nombre: "Juan", apellido: "Perez" },
                    { nombre: "Juan", apellido: "Perez" },
                    { nombre: "Juan", apellido: "Perez" },
                    { nombre: "Juan", apellido: "Perez" },
                    { nombre: "Juan", apellido: "Perez" }
                  ]} />

              </div>
            } />
            <Route path="agregar" element={<div>
              <h1>Nueva Cancion</h1>
              <Formulario
                campos={["nombre", "apellido", "documento"]}
                onSubmit={(obj) => { 
                  const navigate = useNavigate();
                  navigate(-1) 
                  }} />

            </div>}
            />
          </Routes>

        </Bs.Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
