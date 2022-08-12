import { useState } from 'react';
import Parrafo from './components/Parrafo';
import ParrafoWithPadding from './components/ParrafoWithPadding';
import ThemeToggler from './components/ThemeToggler';
import LoremParagraph from './containers/LoremParagraph';
import ParrafoWithMargin from './containers/ParrafoWithMargin';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import ThemeContext from './themes/ThemeContext';


function App() {

  const [globalTheme, setGlobalTheme] = useState(darkTheme);

  const cambiarTema = () =>{
    if (globalTheme === darkTheme) {
          setGlobalTheme(lightTheme);
        } else {
          setGlobalTheme(darkTheme);
        }
  }

  return (
    <ThemeContext.Provider value={{...globalTheme, cambiarTema}}>
      <ThemeToggler />
      <Parrafo texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <hr />
      <ParrafoWithPadding texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <hr />
      <ParrafoWithMargin texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </ThemeContext.Provider>
  );
}

export default App;
