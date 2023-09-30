import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./components/Cabecera";
import ContadorPropsDrilling from "./components/props-drilling/ContadorPropsDrilling";

//
// GALLARDO METE CAMBIO
//
//import MostrarContadorPuro from "./components/redux/components/MostrarContadorPuro";
import MostrarContadorPuro from "./components/redux/containers/MostrarContador.container";

import { Provider } from "react-redux";
import theOnlySourceOfTruth from "./components/redux/store/store";
import OtroMostrarValorPuroContainer from "./components/redux/containers/OtroMostrarValorPuro.container";
import IncrementarContadorContainer from "./components/redux/containers/IncrementarContador.container";

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <Cabecera titulo="Curso React : Redux" />
      <main className="container">
        <div className="row">
          <div className="col">
            <ContadorPropsDrilling />
            {/* La idea que el valor salga del Store 
            <MostrarContadorPuro valor={0} />*/}
          </div>
          <div className="col">
            <div className="text-center border shadow p-3 mt-5">
              <h3>Contador con Redux</h3>
              <MostrarContadorPuro />
              <OtroMostrarValorPuroContainer />
              <div>
                <IncrementarContadorContainer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
