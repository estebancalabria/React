import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TablaCanciones from "./containers/TablaCanciones";
import FormularioAgregarCancion from "./containers/FormularioAgregarCancion";
import FormularioModificarCancion from "./containers/FormularioModificarCancion";
import { Fade } from "react-reveal";


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
                <TablaCanciones />
              </div>
            } />
            <Route path="agregar" element={<Fade left>
              <h1>Nueva Cancion</h1>
              <FormularioAgregarCancion />
            </Fade>}
            />
            <Route path="modificar/:id" element={
              <Fade right>
                 <h1>Modificar Cancion</h1>
                <FormularioModificarCancion />
              </Fade>
            } />
          </Routes>

        </Bs.Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
