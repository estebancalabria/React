import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from './components/Cabecera';
import * as Bs from "react-bootstrap";
import LoginContextProvider from './context/LoginContextProvider';
import Login from './components/Login';
import UserBar from './components/UserBar';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Cabecera titulo="Welcome to TypeScript" />
        <UserBar />
        <Bs.Container>
          <Routes>
            <Route path="" element={<h1>Pagina Principal</h1>} />
            <Route path="login" element={
              <div className='border p-4 mx-auto' style={{ maxWidth: "33vw" }}>
                <Login />
              </div>
            } />
          </Routes>

        </Bs.Container>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
