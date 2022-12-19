import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaJugadores from './containers/ListaJugadores.container';
import Loading from './containers/Loading.container';

function App() {
  return (
    <Provider store={store}>
      <Loading display="block"/>
      <header>
         <h1>Argentina Campeon!!!!!</h1>
      </header>
      <main>
        <ListaJugadores jugadores={[]} />
      </main>
    </Provider>
  );
}

export default App;
