import "bootstrap/dist/css/bootstrap.css"
import Cabecera from "./components/Cabecera";
import ContadorClase from "./components/ContadorClase";
import ContadorFuncional from "./components/ContadorFuncional";
import versus from "./VS_logo.png";  //En la carpeta src . Si la pones en public no la podes importar y validar que exista
//import vs from "../public/VS_logo.png";  //Descartado no sirv

function App() {
  return (
    <div>
      <Cabecera titulo="Bienvenidos a la Clase 3 de React" />
      <main className="containers">
        <div className="row">
          <div className="col-5"><ContadorFuncional /></div>
          <div className="col-2 text-center">
              {/*Opcion 1  En la carpeta public. Poner directamente el nombre*/}
              {/*<img src="VS_logo.png" />*/}

              {/*Opcion 2. El la carpeta src con import (el import valida si existe) */}
              <img src={versus} alt="versus" style={{width:"100%"}}/>
          </div>
          <div className="col-5"><ContadorClase /></div>
        </div>
      </main>
    </div>
  );
}

export default App;
