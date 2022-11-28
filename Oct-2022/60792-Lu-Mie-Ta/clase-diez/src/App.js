import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import BotonCambiarContexto from "./components/BotonCambiarContexto";
import ParrafoCentrado from "./components/ParrafoCentrado";
import Titulo from "./components/Titulo";
import ParrafoDerecha from "./containers/ParrafoDerecha.container";
import StyleContext from "./context/StyleContext";

const estilos = {
  estiloDark: {
    backgroundColor: "#101010",
    color: "#efefef"
  },
  estiloLight: {
    backgroundColor: "#efefef",
    color: "#101010"
  }
}

function App() {

  const [currentStyle, setCurrentStyle] = useState(estilos.estiloLight)

  return (<StyleContext.Provider value={{
      ...currentStyle,
      cambiarModo: () => {
        setCurrentStyle((currentStyle === estilos.estiloLight)
          ? estilos.estiloDark
          : estilos.estiloLight)
      }
    }}>
    <div className="d-flex justify-content-end display-3">
      &#9728; &#65039;
      <div className="form-check form-switch">
        <input type="checkbox" className="form-check-input"
          checked={currentStyle===estilos.estiloDark}
          onChange={(evt) => {
            if (evt.target.checked) {
              setCurrentStyle(estilos.estiloDark)
            } else {
              setCurrentStyle(estilos.estiloLight)
            }
          }} />
      </div>
      &#127769;
    </div>
    <hr />
    <Titulo texto="Bienvenidos a Mi App" />
    <ParrafoCentrado texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <ParrafoDerecha texto="Dercha ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <BotonCambiarContexto />
    <main style={{ height: "80vh", ...currentStyle }}>
      {JSON.stringify(currentStyle)}
    </main>
  </StyleContext.Provider >
  );
}

export default App;
