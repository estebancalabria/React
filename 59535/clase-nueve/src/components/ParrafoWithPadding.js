import { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

const ParrafoWithPadding = ({ texto }) => {

    return (
        <ThemeContext.Consumer>
            {
                (theme) => {
                    return (
                        <div style={{
                            backgroundColor: theme.primaryBackground,
                            color: theme.primaryTextColor,
                            fontSize: theme.bodyFontSize,
                            fontFamily: theme.bodyFont,
                            padding: "3em"
                        }}>
                            {texto}
                        </div>);
                }
            }
        </ThemeContext.Consumer>
    );
}

export default ParrafoWithPadding;