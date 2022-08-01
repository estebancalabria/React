
export default function red(Componente) {
    return function (props) {
        return <div style={{ backgroundColor: "red" }}>
            <Componente {...props} />
        </div>
    }
}