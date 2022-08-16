//css
import "bootstrap/dist/css/bootstrap.css"
//react
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import SessionContext from "./context/SessionContext";
//Componentes
//import Singup from "./components/Singup";
import Singup from "./containers/Singup.container";
import UserInfo from "./components/UserInfo";
//import Login from "./components/Login";
import Login from "./containers/Login.container";
import Tareas from "./components/Tareas";
import Authorize from "./components/Authorize";
import Rutas from "./urls/routes";
import { AuthService } from "./services/auth.service";
import Home from "./components/Home";
import Anonymous from "./components/Anonymous";

function App() {
  
  const [usuario, setUsuario] = useState<string|null>(null);

  return (
    <BrowserRouter>
      <SessionContext.Provider value={{ user : usuario}}>
        <header>
        </header>
        <UserInfo />
        <nav>
          <ul className="nav bg-dark">
            <li className="nav-link"><Link className="nav-item" to={Rutas.HOME}>Home</Link></li>
            <li className="nav-link"><Link className="nav-item" to={Rutas.TAREAS}>Tareas</Link></li>
            <li className="nav-link"><Link className="nav-item" to={Rutas.REPORTES}>Reportes</Link></li>
            <Anonymous>
              <li className="nav-link"><Link className="nav-item" to={Rutas.LOGIN}>Login</Link></li>
            </Anonymous>
            <Anonymous>
              <li className="nav-link"><Link className="nav-item" to={Rutas.SINGUP}>Singup</Link></li>
            </Anonymous>

            <Authorize>
              <li className="nav-link">
                <Link className="nav-item" 
                  to={Rutas.HOME}
                  onClick={()=>{
                    const service : AuthService = new AuthService();
                    service.logout();
                  }}>
                  Logout
                </Link>
              </li>
            </Authorize>
          </ul>
        </nav>
        <main className="container mt-2">
          <Routes>
            <Route path={Rutas.HOME} element={<Home />} />
            <Route path={Rutas.SINGUP} element={ <Singup  /> } />
            <Route path={Rutas.LOGIN} element={<Login />} />
            <Route path={Rutas.TAREAS} element={<Authorize><Tareas /></Authorize>} />
          </Routes>
        </main>
      </SessionContext.Provider>
    </BrowserRouter>
  );
}

export default App;

