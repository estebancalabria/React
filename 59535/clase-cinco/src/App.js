import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import Lista from "./component/Lista";
import ListaCartas from "./component/ListaCartas";
import Tabla from "./component/Tabla";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

function App() {
  return (
    <div>
      <Bs.Container>
        <Bs.Alert variant="primary" className="text-center display-2 mt-1">Lista</Bs.Alert>
        <Lista titulo="Mis Alumnos" items={["Nicolas","Beatriz","Lisandro","Carlos", "Ariel","Cristian"]} />
        <Bs.Alert variant="primary" className="text-center display-2 mt-1">Tabla</Bs.Alert>
        <Tabla items={[
          { nombre: "Elon", apellido : "Musk", edad : 51},
          { nombre: "Mark", apellido : "Zuckemberg", edad : 32},
          { nombre: "Bill", apellido : "Gates", edad : 60},
        ]} />
        <Bs.Alert variant="primary" className="text-center display-2 mt-1">Cartas</Bs.Alert>
        <ListaCartas items={[
            {titulo:"Primer Carta", contenido : lorem, imagen : "https://picsum.photos/200?1"},
            {titulo:"Segunda Carta", contenido : lorem, imagen : "https://picsum.photos/200?2"},
            {titulo:"Tercera Carta", contenido : lorem, imagen : "https://picsum.photos/200?3"},
            {titulo:"Cuarta Carta", contenido : lorem, imagen : "https://picsum.photos/200?4"},
        ]} />
      </Bs.Container>
    </div>
  );
}

export default App;
