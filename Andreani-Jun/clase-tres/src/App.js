import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Provider } from "react-redux";
import BotoneraPelea from "./components/BotoneraPelea";
import HojaDePersonaje from "./components/HojaDePersonaje";
import laVerdadVerdadera from "./store/store";

function App() {
  return (
    <Provider store={laVerdadVerdadera}>
      <Box textAlign="center">
        <Typography variant="h1">Tour de Heores</Typography>
      </Box>
      <Container>
        <HojaDePersonaje />
        <BotoneraPelea />
      </Container>    
    </Provider>
  );
}

export default App;
