import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./Cabecera";

function App() {
  const mensajeFooter = "CopyRight EducacionIT 2022 Todos los derechos son mios muehhehehehe";

  return (
    <div>
      <Cabecera />
      
      <footer style={{
        marginTop:"10em",
        padding:"1em",
        textAlign:"right",
        backgroundColor:"black",  
        color:"white"
      }}>
        {mensajeFooter}
      </footer>
    </div>
  );
}

export default App;
