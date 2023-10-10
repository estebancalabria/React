import { createContext } from "react"

export const estiloClaro = {
    backgroundColor: "lightGrey"
}

export const estiloOscuro = {
    backgroundColor: "black",
    color: "white"
}

export const estiloDefecto = estiloClaro;

export default createContext({
    estilos : estiloDefecto
});