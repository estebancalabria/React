import { colors, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Provider } from 'react-redux';
import Character from './container/Character.container';
import store from './store/store';

let theme = createTheme({
  typography: {
    h1: {
      color: colors.blue[900],
      textAlign: "center"
    }
  },
  components : {
    MuiButton : {
      styleOverrides : {
        contained : {
          color : "green",
          padding : "5em"
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <header>
            <Typography variant='h1'> Tour de Heroes</Typography>
          </header>
          <main>
            <Character />
          </main>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
