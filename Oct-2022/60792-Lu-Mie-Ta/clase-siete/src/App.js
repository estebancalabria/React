import "./App.css";
import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Contador from "./components/Contador";
import Goool from "./components/Goool";
import Confetty from "./components/Confetty";

function App() {
  const [goles, setGoles] = useState(0);

  useEffect(()=>{
    if (localStorage.getItem("goles")){
      setGoles(localStorage.getItem("goles"));
    }
  },[])

  return (
    <>
    <Cabecera titulo="Contador Del Mundial" />
    <main>
      <Contador titulo="Goles de la Seleccion" cantidad={goles} />
      <Confetty>
        <Goool onGol={()=>{
          setGoles(+goles+1);
          localStorage.setItem("goles", goles);
        }}/>
      </Confetty>
    </main>
    </>
  );
}

export default App;
