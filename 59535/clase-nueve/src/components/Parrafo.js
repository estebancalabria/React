import { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

const Parrafo = ({texto}) => {

    const theme = useContext(ThemeContext);

    return (<div style={{
        backgroundColor : theme.primaryBackground,
        color : theme.primaryTextColor,
        fontSize : theme.bodyFontSize,
        fontFamily : theme.bodyFont
    }}>
        {texto}
    </div>);
}
 
export default Parrafo;