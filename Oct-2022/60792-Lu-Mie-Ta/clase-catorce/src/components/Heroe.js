import dibu from "../images/dibu.jpg";

export default function Heroe({nombre, vida, nivel, xp, onAtacar, onDefender}){
    return <div>
        <img src={dibu} alt="" style={{width:"250px", height:"200px"}} />
        <div><h2>{nombre}</h2></div>
        <div>
            Vida : {vida}
        </div>
        <div>
            Nivel : {nivel}
        </div>
        <div>
            Experencia : {xp}
        </div>
        <div>
            <button onClick={onAtacar}>Atacar</button>
            <button onClick={onDefender}>Defender</button>
        </div>
    </div>
}