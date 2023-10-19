
//import Contador from './components/Contador';
import Contador from './containers/Contador.container';
import Boton from './components/Boton';
import { Provider } from 'react-redux';
import store from './store/store';
import Incrementar from './containers/Incrementar.container';
import Reset from './containers/Reset.container';

function App() {
  return (
    <Provider store={store}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        {/*<Contador valor={0}> Sale cambio salen props*/}
        <Contador>
          <Boton texto="-" />
          <Reset />
          <Incrementar />
        </Contador>
      </div>
    </Provider>
  );
}

export default App;
