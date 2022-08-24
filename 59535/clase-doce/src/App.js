import "bootstrap/dist/css/bootstrap.css"
import ListaDeAlumnos from "./containers/ListaDeAlumnos";
import store from "./store/store";
import { Provider } from "react-redux";
import Cabecera from "./components/Cabecera";
import FormAlumno from "./containers/FormAlumno";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EditarAlumno from "./containers/EditarAlumno";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Cabecera titulo="React University" subtitulo="Powered by Educacion IT" />
        <main className="container">
          <Routes>
            <Route path="/" element={
              <>
                <ListaDeAlumnos />
                <Link className="btn btn-success w-100" to="/agregar">
                  Agregar
                </Link>
              </>
            } />
            <Route path="/agregar" element={<FormAlumno />} />
            <Route path="/editar/:id" element={ <EditarAlumno /> } />
          </Routes>
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
