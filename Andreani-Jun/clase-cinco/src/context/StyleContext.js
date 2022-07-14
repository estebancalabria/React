import React from "react";

export const defaultStyles ={
    backgroundColor : "grey",
    fontSize : 19
}

//Es parecido al createStore
export default React.createContext(defaultStyles);