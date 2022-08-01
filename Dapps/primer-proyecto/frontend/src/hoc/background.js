

export default function background(color) {
    return function (Componente) {
        return function (props) {
            return <div style={{ backgroundColor: color }}>
                <Componente {...props} />
            </div>
        }
    }
}

/*export default function background(color, Componente) {
    return function (props) {
        return <div style={{ backgroundColor: color}}>
            <Componente {...props} />
        </div>
    }
}*/

