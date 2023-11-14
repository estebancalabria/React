import * as Mui from "@mui/material";
//import * as MuiIcons from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import Cabecera from './components/Cabecera';
//import LoginForm from "./components/LoginForm";
import Login from "./containers/Login";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from "./context/LoginProvider";
import Home from "./pages/Home";
import Secret from "./pages/Secret";
import Authorize from "./components/Authorize";


function App() {

  return (
    <BrowserRouter>
      <LoginProvider>
        <Cabecera titulo="Mi Applicacion Material Design" />

        <Mui.Container sx={{ height: "100vh", marginTop: 10 }}>
          <Routes>
            <Route path="login" element={
              <Mui.Box display="flex" justifyContent="center" alignItems="center">
                <Login />
              </Mui.Box>} />
            <Route path="" element={<Home />} />
            <Route path="secret" element={<Authorize><Secret /></Authorize>} />
          </Routes>
        </Mui.Container>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
