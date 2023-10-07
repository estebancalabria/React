import { Provider } from "react-redux";
import CabeceraConRedux from "./view/containers/CabeceraConRedux";
import globalState from "./store/appGlobalState";
import ListaConRedux from "./view/containers/ListaConRedux";
import InicializadorTareasRedux from "./view/containers/IncializadorTareasRedux";

function App() {
  return (
    <Provider store={globalState}>
      <InicializadorTareasRedux />
      <CabeceraConRedux />
      <main className="container">
        <div className="w-50 mx-auto">
          <ListaConRedux />
        </div>
      </main>
    </Provider>
  );
}

export default App;
