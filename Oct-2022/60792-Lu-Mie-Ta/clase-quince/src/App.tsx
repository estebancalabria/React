import LabelsContext from './context/LabelsContext';
import RecuadroCentrado from './container/RecuadroCentrado.container';

function App() {
  return (
    <LabelsContext.Provider value={{titulo:"Vamos Argentina"}}>
      <RecuadroCentrado />
    </LabelsContext.Provider>
  );
}

export default App;
