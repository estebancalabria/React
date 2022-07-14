import { useState } from 'react';
import Get from './childrenprops/Get';
import ClassContextConsumer from './components/ClassContextConsumer';
import ContextConsumer from './components/ContextConsumer';
import DummyComponent from './components/DummyComponent';
import HookContextConsumer from './components/HookContextConsumer';
import ContextWrapper from './containers/ContextWrapper';
import GreenDummyComponent from './containers/GreenDummyComponent';
import RedDummyComponent from './containers/RedDummyComponent';
import RickAndMortyQuote from './containers/RickAndMortyQuote';
import StyleContext from './context/StyleContext';
import red from './hoc/red';
import Fetch from './renderprops/Fetch';

const RedDummy = red(DummyComponent);

const lightStyle = {backgroundColor:"pink", fontSize:20};
const darkStyle = {backgroundColor:"grey", fontSize:22};

function App() {

  const [appStyle, setAppStyle] = useState(lightStyle);

  return (
    <div>
      <DummyComponent />
      <hr />
      <RedDummy />
      <hr />
      <RedDummyComponent />
      <hr />
      <GreenDummyComponent />
      <hr />
      <HookContextConsumer />
      <hr />
      <StyleContext.Provider value={appStyle}>
        <input type="checkbox" onClick={(cb)=>{ 
           cb.target.checked 
            ? setAppStyle(lightStyle) 
            : setAppStyle(darkStyle);
        }} />
        <HookContextConsumer />
        <hr />
        <ContextConsumer />
        <hr />
        <ContextWrapper />
        <hr />
        <ClassContextConsumer />
        <hr />
        <Fetch url="https://rickandmortyapi.com/api/character/1" 
          render={(resp)=>(
              <div>
                <blockquote>
                  {resp.name}
                  <footer>{resp.species}</footer>
                </blockquote>
              </div>
          )} />
          <Get url="https://rickandmortyapi.com/api/character/2">
            {
                (resp) => (
                  <div>
                    <blockquote>
                      {resp.name}
                      <footer>{resp.species}</footer>
                    </blockquote>
                  </div>
                )
              }
          </Get>
          <RickAndMortyQuote />
      </StyleContext.Provider>
    </div>
  );
}

export default App;
