import { useSelector } from "react-redux";
import ListaDeAlumnos from "../components/ListaDeAlumnos"

export default (props)=>{

    //mapDispatchToProps
    const alumnos = useSelector(state => state.alumnos); 

    return <ListaDeAlumnos {...props} alumnos={alumnos} />
}