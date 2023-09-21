import { Box } from "@mui/system";
import UseContextDemo from "./components/UseContextDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseFetchDemo from "./components/useFetchDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseReduxDemo from "./components/UseReduxDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseStateDemo from "./components/UseStateDemo";

function App() {
  return (
    <Box>
       Use State:
       <UseStateDemo />
       <hr />
       Use Effect:
       <UseEffectDemo />
       <hr />
       UseReducer:
       <UseReducerDemo />
       <hr />
       Use Ref:
       <UseRefDemo />
       <hr />
       Use Memo : 
       <UseMemoDemo />
       <hr />
       Use Context:
       <UseContextDemo />
       <hr />
       Redux con Hooks:
       <UseReduxDemo />
       <hr/>
       <UseFetchDemo />
    </Box>
  );
}

export default App;
