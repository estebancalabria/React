//css
import "bootstrap/dist/css/bootstrap.css"
//react
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SessionContext, { ISessionContext } from "./context/SessionContext";
//Componentes
//import Singup from "./components/Singup";
import Singup from "./containers/Singup.container";
import UserInfo from "./components/UserInfo";
//import Login from "./components/Login";
import Login from "./containers/Login.container";
import Tareas from "./components/Tareas";
import Authorize from "./components/Authorize";

function App() {
  
  const [usuario, setUsuario] = useState<string|null>(null)

  return (
    <BrowserRouter>
      <SessionContext.Provider value={{ user : usuario}}>
        <header>
        </header>
        <UserInfo />
        <nav>
          <ul className="nav bg-dark">
            <li className="nav-link"><Link className="nav-item" to="/">Home</Link></li>
            <li className="nav-link"><Link className="nav-item" to="/tareas">Tareas</Link></li>
            <li className="nav-link"><Link className="nav-item" to="/reportes">Reportes</Link></li>
            <li className="nav-link"><Link className="nav-item" to="/login">Login</Link></li>
            <li className="nav-link"><Link className="nav-item" to="/signup">Singup</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/signup" element={ <Singup  /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/tareas" element={<Authorize><Tareas /></Authorize>} />
          </Routes>
        </main>
      </SessionContext.Provider>
    </BrowserRouter>
  );
}

export default App;
