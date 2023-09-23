import Cabecera from './components/Cabecera';
//import * as ReactRouter from "react-router-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Editor from './pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <Cabecera titulo="Bienvenidos al curso de React" subtitulo="Clase Seis" />
      <nav className='bg-dark text-light'>
        <ul className='nav justify-content-center'>
          <li className='nav-item'><Link className='nav-link' to="/" title='Home'>Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/Productos">Productos</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/Contacto">Contacto</Link></li>
         {/*
         <li className='nav-item'><a className='nav-link' href="/Contacto">Contacto con link</a></li> 
         Si en vez del componente Link uso una ancla html estandar a veo que el comportamiento
         Es que refresca (No seria una SPA)
        */}
        </ul>
      </nav>
      <main className='container'>
          <Routes>
             <Route path='/' Component={Home} />
             <Route path='/Productos' element={<Productos titulo="Pagina de productos" />} />
             <Route path='/Productos/:id' element={<Editor />}  />
             <Route path='/Contacto' Component={Contacto} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
