import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

//ccc snippet que la genera con el constructor
class ListaDeContactos extends Component {

    state = { contactos : [
        {id:1, nombre:"James Smith", descripcion:"CEO Founter Farmacity", imagen:"https://thispersondoesnotexist.com/", mail:"james@farmacity.com", telefono : "(555)555-55555"},
        {id:2, nombre:"Chespirito", descripcion:"El mejor", imagen:"https://thispersondoesnotexist.com/", mail:"email", telefono:"123123123"},
        {id:3, nombre:"Pedro Picapiedra", descripcion:"CEO RocaCity", imagen:"https://thispersondoesnotexist.com/", mail:"pedro.picapiedra@rocaCity.com", telefono : "(011)1255-5874"},
        {id:4, nombre:"Angelina Sholy", descripcion:"Actriz", imagen:"https://thispersondoesnotexist.com/", mail:"angelina@angelina.com", telefono : "(237)465-8547"},
        {id:5, nombre:"Casimiro Buena Vista", descripcion:"Oculista", imagen:"https://thispersondoesnotexist.com/", mail:"casimiro@hotmail.com", telefono : "(237)123-2145"},
        {id:6, nombre:"Ricardo Fort",descripcion:"rol-roys", imagen:"https://thispersondoesnotexist.com/", mail:"ricky@gmail.com", telefono:"(555)555-54355"},
    ] }
    
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            contactosFiltrados : this.state.contactos,
            loading : false
        }
    }
    
    
    render() { 

        const {contactosFiltrados : contactos} = this.state;
        const {loading} = this.state;
        
        return (<div className="row">
            <div className='col-12 input-group mb-2'>
                <input className='form-control' 
                    type="text" 
                    placeholder='Escriba el nombre de la persona...'
                    onChange={(evt)=>{
                        this.setState({loading:true})
                        setTimeout(()=>{
                            this.setState({
                                contactosFiltrados : this.state.contactos.filter( 
                                    (c) => (c.nombre.toLowerCase().includes(evt.target.value.toLocaleLowerCase()))
                                ),
                                loading:false
                            })
                        },500);
                    }} />
                <button className='btn btn-outline-secondary'>
                    &#128270;
                </button>
            </div>
            {
                (loading) && <div className='spinner-grow mx-auto mt-3' 
                              style={{width:"5em", height:"5em"}}>
                </div>
            }
            {
                (contactos.length==0) && (!loading) && <h3 className='text-muted display-3 mt-3'>
                    No hay contactos con ese criterio...
                </h3>
            }
            {
                (!loading) && contactos.map((contacto)=>(
                    <div className="col-6" key={contacto.id}>
                        <div className="card w-100 mb-3">
                            <div className="row g-0">
                                <div className="col-4">
                                    <img className="img-fluid rounded-start" 
                                         src={contacto.imagen + "/image?" + contacto.id} />
                                </div>
                                <div className="col-8">
                                    <div className='card-body'>
                                        <h5 className='card-title'>{contacto.nombre}</h5>
                                        <p className='card-text'>{contacto.descripcion}</p>
                                        <p className='card-text text-muted'>&#9742;&#65039; {contacto.telefono}</p>
                                        <p className='card-text text-muted'>&#128231;{contacto.mail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>);
    }
}
 


export default ListaDeContactos;
