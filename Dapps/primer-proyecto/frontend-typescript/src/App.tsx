import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Singup from "./components/Singup";
import UserInfo from "./components/UserInfo";
import SessionContext, { ISessionContext } from "./context/SessionContext";
import Registro from "./models/Registro";

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
            <li className="nav-link"><Link className="nav-item" to="/signup">Singup</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/signup" element={<Singup onRegister={(reg: Registro) => {
                setUsuario(reg.usuario);
            }} />} />
          </Routes>
        </main>
      </SessionContext.Provider>
    </BrowserRouter>
  );
}

export default App;
