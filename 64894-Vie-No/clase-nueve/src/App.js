import Parrafo from "./components/Parrafo";
import StyleContext from "./contexts/StyleContext";
import lightStyles from "./styles/lightStyles";
import { useState } from "react";
import CambiarEstilo from "./components/CambiarEstilo";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import ParrafoLoremHooks from "./redux/containers/ParrafoLoremHooks.container";
import ParrafoLoremConnect from "./redux/containers/ParrafoLoremConnect.container";
import BotonCambiarLorem from "./redux/containers/BotonCambiarLorem.container";

function App() {

  const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const [globalStyle, setGlobalStyle] = useState(lightStyles);

  return (
    <Provider store={store}>
      <StyleContext.Provider value={{
        style: globalStyle,
        cambiarEstilo: (estiloNuevo) => { setGlobalStyle(estiloNuevo) }
      }}>
        {/* Observo que se me repite mucho pasar la misma prop (styles) a todos */}
        {/* 
      <Parrafo texto={lorem1} style={darkStyles} />
      <Parrafo texto={lorem2} style={darkStyles} />
      <Parrafo texto={lorem3} style={darkStyles} />
      */}
        
        <CambiarEstilo />
        <BotonCambiarLorem />
        <ParrafoLoremHooks />
        <ParrafoLoremConnect />
        <Parrafo texto={lorem1} />
      </StyleContext.Provider>
    </Provider>
  );
}

export default App;
