import "bootstrap/dist/css/bootstrap.css"
import ListadoJugadores from "./components/ListadoJugadores";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FormularioJugador from "./components/FormularioJugador";
import AgregarJugador from "./components/AgregarJugador";
import ModificarJugador from "./components/ModificarJugador";

function App() {
  return (
    <BrowserRouter>
      <header className="alert alert-success text-center">
        <h1 className="display-1">&#9917;La ecaloneta&#9917;</h1>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<ListadoJugadores />} />
          <Route path="/agregar" element={<AgregarJugador />} />
          <Route path="/modificar/:id" element={<ModificarJugador />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
