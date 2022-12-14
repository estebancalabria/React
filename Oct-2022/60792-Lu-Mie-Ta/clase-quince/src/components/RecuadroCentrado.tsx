
interface RecuadroCentradoProps {
    titulo: string
}

export default function RecuadroCentrado(props: RecuadroCentradoProps) {
    return <div style={{
        display: "flex",
        height: "100vh",

        backgroundColor: "lightblue",
        flexDirection: "column",
        fontSize: "5em"
    }}>
        <div style={{ height: "30%" }}></div>
        <div style={{
            height: "40%",
            display:"flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div>{props.titulo}</div>
        </div>
        <div style={{ height: "30%" }}></div>
    </div>
}