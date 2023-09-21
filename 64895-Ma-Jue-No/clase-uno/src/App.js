import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let titulo = "Bienvenidos al curso de React";
  let subtitulo = "Clase 1";
  let centrado = { textAlign: "center" };
  let fondoGris = { backgroundColor: "lightGrey" }
  let sinBullets = { listStyleType: "none" }

  return (
    <div>
      <header className="alert alert-info text-center">
        <h1>&#128540; {titulo} &#128540;</h1>
        <h2>{subtitulo}</h2>
      </header>
      <main>
        <h3 style={{
          backgroundColor: "grey",
          color: "blue",
          padding: "0.5em",
          textAlign: "center"
        }}>
          Las primeras impresiones de react es que es
        </h3>
        <ul style={{ ...centrado, ...fondoGris, ...sinBullets }}>
          <li>Funcional</li>
          <li>Practico</li>
          <li>Agradable</li>
          <li className="fondo-rojo">Facil</li>
        </ul>
      </main>
      <footer className="bg-dark text-light text-end p-2 fixed-bottom">
          CopyRight 2023 &copy; EducacionIT. Todos los derechos Reservados
      </footer>

    </div>
  );
}

export default App;
