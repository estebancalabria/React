import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

//Remplazo del component did mout
const UseEffectDemo = (props) => {
    const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
    const [quote, setQuote] = useState({quote:"", author:""});
    useEffect(()=>{ 
        axios.get(url).then((resp)=>{
            setQuote(resp.data[0]);
        })
    },[])

    return (<Box justifyContent="center">
        <Typography variant="h6">
            {quote.quote} - {quote.author}
        </Typography>
    </Box>);
}
 
export default UseEffectDemo;