import { useContext } from "react";
import ParrafoWithMargin from "../components/ParrafoWithMargin";
import ThemeContext from "../themes/ThemeContext";

export default (props) => {
    const theme = useContext(ThemeContext);
    return <ParrafoWithMargin theme={theme}  {...props} />
}