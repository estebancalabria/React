import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link,Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Inicio from "./components/Inicio";
import PokemonList from "./components/PokemonList";
import StarWarsList from "./components/StawWarsList";

function App() {
  return (
    <BrowserRouter>
      <Cabecera titulo="Api Client Demo" />
      <nav>
         <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokemon">Api Pokmeon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starwars">Api Pokmeon</Link>
            </li>
         </ul>
      </nav>
      <hr />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/starwars" element={<StarWarsList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
