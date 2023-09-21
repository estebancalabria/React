import { createContext, useContext } from "react"

const temaLight = {
    color : "red",
    fondo : "grey"
}

const ThemeContext = createContext(temaLight);

const ContextConsumer = () => {
    //Lo usamos para consumir un contexto en vez del renderprops
    const theme = useContext(ThemeContext);

    return (<div style={{backgroundColor : theme.fondo, color : theme.color}}>
        Consumidor del contexto
    </div>);
}
 
const UseContextDemo = () => {
    return (<ThemeContext.Provider value={temaLight}>
        <ContextConsumer />
    </ThemeContext.Provider>);
}
 
export default UseContextDemo;