import { Provider } from "react-redux";

//import Contador from "./components/Contador";
import Contador from "./containers/Contador";

//import OtroContador from "./components/OtroContador";
import OtroContador from "./containers/OtroContador";

import theOnlySourceOfTruth from "./store/store";

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <Contador />
      <OtroContador />
    </Provider>
  );
}

export default App;
