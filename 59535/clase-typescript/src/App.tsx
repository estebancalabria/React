import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import Personajes from "./components/Personajes";
import RmCharacterService from "./services/rm-character.service";
import RmCharacterServiceMock from "./services/rm-character.service.mock";
import { useState } from "react";
import RmCharacterServiceInterface from "./services/rm-character.service.interface";

function App() {

  const [service, setService] = useState<RmCharacterServiceInterface>(new RmCharacterServiceMock())
  const [titulo, setTitulo] = useState("Mock")

  return (
    <div>
      <Cabecera titulo="React With TypeScript"
        subtitulo="Juguemos un poco con Typescript" />


      <main className="container">
        <div className=" form-check form-switch">
          <input className="float-end form-check-input" 
            type="checkbox" role="switch"
            onClick={(evt)=>{
               if ((evt.target as HTMLInputElement).checked){
                 setService(new RmCharacterService())
                 setTitulo("Posta");
               }else{
                 setService(new RmCharacterServiceMock())
                 setTitulo("Mock");
               }
            }}/>
        </div>

        <Personajes service={service} titulo={titulo} />
      </main>
    </div>
  );
}

export default App;
