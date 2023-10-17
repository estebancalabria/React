import { useState } from 'react';
import CabeceraContextApi from './components/CabeceraContextApi';
import LoginContextApi from './components/LoginContextApi';
import SessionContext from './session-context/SessionContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListaProductosRedux from './components/ListaProductosRedux';
import TotalProductosRedux from './components/TotalProductosRedux';

//El context Api es una forma para compartir datos entre los componentes
//Sin pasarlos por props (props-drilling)
function App() {

  const [context, setContext] = useState({ userName: "", isLoggedIn: false })

  return (
    <Provider store={store}>
      <SessionContext.Provider value={{
        ...context,
        logIn: (usr, pass) => {
          (usr.length>0) && setContext({ userName: usr, isLoggedIn: true })
        },
        logOut: () => {
          setContext({ isLoggedIn: false })
        }
      }}>
        <CabeceraContextApi />
        <LoginContextApi>
          <ListaProductosRedux />
          <TotalProductosRedux />
        </LoginContextApi>
        
      </SessionContext.Provider>
    </Provider>
  );
}

export default App;
