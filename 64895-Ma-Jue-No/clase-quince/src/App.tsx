import { useState } from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import LoginContext from "./context/LoginContext";

import Cabecera from './components/Cabecera';
import LoginForm from "./components/LoginForm";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{
      isLoggedIn: isLoggedIn,
      logIn: (usuario, password) => {
        (usuario == "admin") && (password = "123") && setIsLoggedIn(true)
      }
    }}>
      <Cabecera titulo="Mi Applicacion Material Design" />
  
      <Mui.Container sx={{ height: "100vh", marginTop: 10 }}>
        <LoginForm onLogin={(usr, pass) => {
          alert(`Login con  ${usr} ${pass}`);
        }} />
        {isLoggedIn ? "Esta Logueado" : "No esta logieado"}
      </Mui.Container>
    </LoginContext.Provider>
  );
}

export default App;
