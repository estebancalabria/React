import Contador from "./containers/Contador.container";
import Decrementar from "./containers/Decrementar.container";
import Incrementar from "./containers/Incrementar.container";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Contador />
      <Incrementar />
      <Decrementar />
    </Provider>
  );
}

export default App;
