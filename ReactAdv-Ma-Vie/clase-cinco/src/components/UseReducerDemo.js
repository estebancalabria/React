import { Button, Typography } from "@mui/material";
import { useReducer } from "react";
import { Box } from "@mui/system";

function reducer(state, action) {
    let newState = { ...state };
    switch (action.type) {
        case '+':
            newState.count++;
            break;
        case '-':
            newState.count--;
            break;
        default:
            break;
    }
    return newState;
}

const UseReducerDemo = (props) => {

    const [state, dispatch] = useReducer(reducer, {count:0});

    return (<Box>
        <Typography variant="h6">
            Contador {state.count}
        </Typography>
        <Button variant="contained" onClick={()=>{ dispatch({type:"+"})}}>+</Button>
        <Button variant="contained" onClick={()=>{ dispatch({type:"-"})}}>-</Button>
    </Box>);
}
 
export default UseReducerDemo;