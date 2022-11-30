import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioJugador = ({onAction,titulo, jugador={}}) =>{

    const navigate = useNavigate();
    const [player, setPlayer] = useState(jugador)

    return (<form>
        <div className="alert alert-primary">
            {titulo}
        </div>
        Camiseta:
        <input type="number" className="form-control" min={1} max={99} 
            onChange={(evt)=>{ setPlayer({...player, camiseta : evt.target.valueAsNumber}) }} />
        Nombre:
        <input type="text" className="form-control" required 
           onChange={(evt)=>{ setPlayer({...player, nombre : evt.target.value}) }} />
        Posicion:
        <select className="form-control"
            onChange={(evt)=>{ setPlayer({...player, posicion : evt.target.value}) }} 
          >
            <option value="arquero">Arquero</option>
            <option value="defensor">Defensor</option>
            <option value="mediocampista">Mediocampista</option>
            <option value="delantero">delantero</option>
        </select>

        <div className="mt-2 text-end">
            <button className="btn btn-danger me-1" onClick={()=>{navigate(-1)}}>
                Cancel
            </button>
            <button className="btn btn-primary" onClick={()=>{
                onAction(player);
            }}>Aceptar</button>
        </div>

    </form>)
}

export default FormularioJugador