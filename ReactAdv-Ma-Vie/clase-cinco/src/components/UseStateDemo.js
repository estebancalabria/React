import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const UseStateDemo = () => {
    console.log("UseStateDemo Render");
    const [count, setCount] = useState(0);
    return (<Box justifyContent="center"> 
        <Typography variant="h4">Contador : {count}</Typography>
        <Button variant="contained" onClick={()=>{setCount(count+1)}}>
            +
        </Button>
    </Box>);
}
 
export default UseStateDemo;