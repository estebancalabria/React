import "bootstrap/dist/css/bootstrap.css";

function App() {
  const titulo = "Bienvenidos a React";
  const subtitulo = <h2>La mejor libreria de frontend</h2>;
  /*const alumnos = [
    <li className="list-group-item">Exequiel Quiroga</li>},
    <li className="list-group-item">Jorge Carrillo</li>,
    <li className="list-group-item">Elisa Luzuriaga</li>,
    <li className="list-group-item">Lucas Garcia</li>,
    <li className="list-group-item">Camila Gatto</li>,
    <li className="list-group-item">Esteban Calabria</li>,    
  ];*/

  const alumnos = [
    { id: 1, nombre: "Exequiel Quiroga" },
    { id: 2, nombre: "Jorge Carrillo" },
    { id: 3, nombre: "Elisa Luzuriaga" },
    { id: 4, nombre: "Lucas Garcia" },
    { id: 5, nombre: "Camila Gatto" },
    { id: 6, nombre: "Esteban Calabria" }
  ];

  return (
    <div>
      <header className="alert alert-info text-center">
        <h1 >
          {titulo}
        </h1>
        {subtitulo}
      </header>
      <main className="container">
        <ul className="list-group active w-50 mx-auto">
          <li className="list-group-item active text-center">Mis Alumnos</li>
          {
            /*alumnos.map((item) => {
              return <li key={item.id}
                style={{backgroundColor:"lightgrey", padding:"1em"}}
                className="list-group-item" >
                {item.nombre}
              </li>
            })*/
            
            /* Con ()=>() parentesis ( en vez de { */
            alumnos.map((item, index) => (
              <li key={index}
                style={{backgroundColor:"lightgrey", padding:"1em"}}
                className="list-group-item" >
                {item.nombre}
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
