import "bootstrap/dist/css/bootstrap.css"

const Ofertas = ({productos}) => {

    /*let productos = [
        { nombre: "Meme de Moe ", precio: 100 },
        { nombre: "Meme de Cilian Murphy", precio: 200 },
        { nombre: "Meme del gatito triste", precio: 300 },
        { nombre: "Meme programador", precio: 250 }
    ]*/

    return <ul className="list-group w-50 mx-auto mt-4 mb-4">
        <li className="list-group-item active">Ofertas</li>
        {productos.map((ele) => (<li className="list-group-item">{ele.nombre} (${ele.precio})</li>))}
    </ul>
}

export default Ofertas;