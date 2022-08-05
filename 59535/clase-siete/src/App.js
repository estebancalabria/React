import { Provider } from "react-redux";
//import Incrementar from "./components/Incrementar";
import Incrementar from "./containers/Incrementar";
//import Contador from "./components/Contador";
import Contador from "./containers/Contador";
import laVerdadVerdadera from "./store/store"

function App() {
  return (
    <Provider store={laVerdadVerdadera}>
      <Contador />
      <Incrementar />
    </Provider>
  );
}

export default App;
