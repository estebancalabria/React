import { Typography } from '@mui/material';
import { Provider } from 'react-redux';
import Character from './container/Character.container';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <header >
        <Typography variant='h1'>Tour de Heroes</Typography>
      </header>
      <main>
        <Character />
      </main>
    </Provider>
  );
}

export default App;
