import { useContext } from "react"
import ThemeContext from "../themes/ThemeContext"
import "./ThemeToggler.css";

export default (props) => {

    //const theme = unseContext(ThemeContext)
    const { cambiarTema } = useContext(ThemeContext);

    return (<div style={{ margin: "1em", textAlign: "end" }}>
        <label class="switch">
            <input type="checkbox" onClick={cambiarTema} />
            <span class="slider"></span>
        </label>
        {
        /*<button onClick={cambiarTema }>
            Cambiar Tema
        </button>*/
        }
    </div>)
}