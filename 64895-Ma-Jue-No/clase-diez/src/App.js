import "bootstrap/dist/css/bootstrap.css";
import ListaDeTareas from "./view/containers/ListaDeTareas";
import { Provider } from "react-redux";
import store from "./store/store";
import InputConBoton from "./view/components/InputConBoton";
import AgregarTarea from "./view/containers/AgregarTarea";


function App() {
  return (
    <Provider store={store}>
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection : "column",
        alignItems:"center",
        height:"100vh"
      }}>
        {/*<Lista
        titulo="Ejemplo de Lista"
  items={[{ id: 1, nombre: 'AA' }, { id: 2, nombre: 'BB' }]} />
        <InputConBoton onInput={(t)=>{alert(t)}} />*/}
        <AgregarTarea />
        <ListaDeTareas></ListaDeTareas>
        
      </div>
    </Provider>
  );
}

export default App;
