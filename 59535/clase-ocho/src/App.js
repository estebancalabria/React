import { Typography, Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Provider } from 'react-redux';
import Init from './components/Init';
import GrillaPersonas from './containers/GrillaPersonas';
import laUnicaVerdad from './store/store';

function App() {
  return (
    <Provider store={laUnicaVerdad}>
      <Init />
      <header>
        <Box textAlign="center">
           <Typography variant="h1">Mi Super Agenda React</Typography>
        </Box>
      </header>
      <Container>
        <GrillaPersonas />
      </Container>
    </Provider>
  );
}

export default App;
