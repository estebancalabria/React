
const ParrafoWithMargin = ({theme, texto}) => {

    return (<div style={{
        backgroundColor : theme.primaryBackground,
        color : theme.primaryTextColor,
        fontSize : theme.bodyFontSize,
        fontFamily : theme.bodyFont,
        margin:"2em"
    }}>
        {texto}
    </div>);
}
 
export default ParrafoWithMargin;