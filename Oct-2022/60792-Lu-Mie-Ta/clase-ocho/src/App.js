import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

//import Contador from './components/Contador';
import Contador from './containers/Contador.container';

//import Decrementar from './components/Decrementar';
import Decrementar from './containers/Decrementar.container';

import Incrementar from './components/Incrementar';
import Resetear from "./containers/Resetear";
import laVerdadVerdadera from "./store/store";

function App() {
  const v = 30; // La voy a pasar l store
  return (
    <Provider store={laVerdadVerdadera}>
        <Contador />
        <div className="text-center">
            <Resetear onAccion={()=>{alert("RESET")}} valor={v} />
            <Decrementar />
            <Incrementar onAccion={()=>{alert("Incrementar")}} />
        </div>
    </Provider>
  );
}

export default App;
