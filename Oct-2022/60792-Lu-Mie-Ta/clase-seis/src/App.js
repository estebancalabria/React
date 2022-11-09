import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Contactos from "./components/Contactos";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import rutas from "./res/sitemap";
import logo from "./images/alguito.png";
import Rotate from 'react-reveal/Rotate';

function App() {
  return (
    <BrowserRouter>
      <header className="alert alert-primary text-center mb-0">
        <Rotate top left>
          <img src={logo} style={{width:"200px", height:"auto"}} alt="" />
          <h1>React Drinks</h1>
          <h2>No te quedes seco un sabado por la noche</h2>
        </Rotate>
      </header>
      <nav className="navbar bg-dark text-light">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to={rutas.HOME}>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to={rutas.PRODUCTOS}>Productos</Link></li>
          <li className="nav-item"><Link className="nav-link" to={rutas.NOSOTROS}>Nosotros</Link></li>
          <li className="nav-item"><Link className="nav-link" to={rutas.CONTACTOS}>Contacto</Link></li>
        </ul>
      </nav>
      <main className="container">
        <Routes>
          <Route path={rutas.HOME} element={<h1> Este es el home</h1> } />
          <Route path={rutas.PRODUCTOS} element={<Productos /> } />
          <Route path={rutas.NOSOTROS} element={<Nosotros /> } />
          <Route path={rutas.CONTACTOS} element={<Contactos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
