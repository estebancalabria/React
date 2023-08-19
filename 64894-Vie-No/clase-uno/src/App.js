import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

function App() {

  let mensaje = "React Clase Uno";

  //A una variable le puedo asignar un JSX
  let subtitulo = <h3 className="text-center">React es lo mas grande que hay</h3>;

  //Esto es un objeto JSON
  let estiloH2 = {
    margin: "1em",
    color: "orange",
    textAlign: "center"
  }

  let imagen = "logo192.png";

  return (
    <div>
      <header className="alert alert-info mb-0">
        <h1 className="text-center">{mensaje}</h1>
      </header>
      <main style={{ borderStyle: "solid", borderWidth: "1px", backgroundColor: "lightgrey" }}>
        <h2 style={estiloH2}>Bienvenidos a mi primer pagina con react</h2>
        {subtitulo}
        <img className="d-block m-auto " src={imagen} />
      </main>
      <footer className="App-footer">
        Copyright-2023. Educacion IT.
      </footer>
    </div>
  );
}

export default App;
