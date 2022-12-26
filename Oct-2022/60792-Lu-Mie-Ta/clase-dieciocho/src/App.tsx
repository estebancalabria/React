import "bootstrap/dist/css/bootstrap.css"
import CabeceraCentrada from "./containers/CabeceraCentrada";
import ListaPersonajesRM from "./containers/ListaPersonajesRM";
import IRmResults from "./models/rmresult.interface";
import Get from "./renderprops/Get";
import GetC from "./renderprops/GetC";

function App() {
  return (
    <div>
      <CabeceraCentrada titulo="Ultima clase Redux" />
      <main className="container">
        {/*<ListaPersonajesRM />*/}
        {/*<Get url="https://rickandmortyapi.com/api/character" 
           render={(resp:IRmResults)=>{
              return (<ul>
                 {resp.results.map((c)=>(
                  <li key={c.id}>{c.name} ({c.species})</li>
                 ))}
              </ul>)
           }}/>*/}
        <GetC url="https://rickandmortyapi.com/api/character">
          {
            (resp: IRmResults) => {
              return (<ul>
                {resp.results.map((c) => (
                  <li key={c.id}>{c.name} ---- ({c.species})</li>
                ))}
              </ul>)
            }
          }
        </GetC>
      </main>
    </div>
  );
}

export default App;
