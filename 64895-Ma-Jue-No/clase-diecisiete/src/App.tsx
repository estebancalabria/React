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
import store from "./redux/store";
import { Provider } from "react-redux";
import GrillaProductos from "./containers/GrillaProductos";


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginProvider>
          <Cabecera titulo="Mi Asombroso Ecomerce" />

          <Mui.Container sx={{ height: "100vh", marginTop: 10 }}>
            <Routes>
              <Route path="login" element={
                <Mui.Box display="flex" justifyContent="center" alignItems="center">
                  <Login />
                </Mui.Box>} />
              <Route path="" element={<Home />} />
              <Route path="productos" element={<Authorize><Secret /></Authorize>} />
            </Routes>
            
          </Mui.Container>
        </LoginProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
