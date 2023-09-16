import "bootstrap/dist/css/bootstrap.css"
import RickAndMorty from "./components/RickAndMorty";
import { useState } from "react";
import Pokemon from "./components/Pokemon";

function App() {

  const [showPokemon, setShowPokemon] = useState(false)

  return (
    <div>
      <header className="bg-primary p-2 m-2 text-light text-center">
        <h1>React Clase 5</h1>
        <h2>Llamadas a api</h2>
      </header>
      <div className="text-end">
        <label className="form-check-label pb-2">Rick and morty</label>
        <div className="form-check form-switch" style={{display:"inline-block"}}>
          <input className="form-check-input" type="checkbox" onChange={()=>{setShowPokemon(!showPokemon)}} />
        </div>
        <label className="form-check-label pb-2">Pokemon</label>
      </div>
      <main className="container">
        { showPokemon ? <Pokemon /> :<RickAndMorty />}
      </main>
    </div>
  );
}

export default App;
