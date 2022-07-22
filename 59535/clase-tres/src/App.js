import "bootstrap/dist/css/bootstrap.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Busqueda from "./components/Busqueda";
import Cabecera from "./components/Cabecera";
import Biblioteca from "./components/Biblioteca";
import Listas from "./components/Listas";
import TopRanked from "./components/TopRanked";

function App() {

  return (
    <BrowserRouter>
        <Cabecera titulo="La mejor música en Reactify"/>
        <nav>
          <ul className="nav bg-dark">
            <li className="nav-item"><Link className="nav-link" to="/biblioteca">Biblioteca</Link></li>
            <li className="nav-item"><Link className="nav-link" to="listas">Listas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="topranked">Top Ranked</Link></li>
          </ul>
        </nav>
        <Busqueda />
        <main className="container">
          <Routes>
            <Route path="biblioteca" element={<Biblioteca />} />
            <Route path="listas" element={<Listas />}></Route>
            <Route path="topranked" element={<TopRanked />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
