import { Store, configureStore, createReducer } from "@reduxjs/toolkit"
import { Producto } from "../models/producto.model"

export const ACT_AGREGAR_AL_CARRITO = "ACT_AGREGAR_AL_CARRITO";

export type StoreState = {
    productos: Producto[]
}

const productos: Producto[] = [
    { id:1, codigo: "Dell", nombre: "Dell", marca: "Dell", descripcion: "Computadora Dell", imagen: "dell.webp", precio: 500000 },
    { id:2, codigo: "Lenovo", nombre: "Lenovo", marca: "Lenovo", descripcion: "Computadora Lenovo", imagen: "Lenovo.webp", precio: 500000 },
    { id:3, codigo: "SonyV", nombre: "Sony Vaio", marca: "Sony", descripcion: "Computadora Sony Vaio", imagen: "Sony_vaio.webp", precio: 500000 },
    { id:4, codigo: "Reloj", nombre: "Reloj", marca: "Garmin", descripcion: "Smartwatch", imagen: "reloj.png", precio: 500000 }
]

//createReducer()

const store = configureStore({
    reducer: (s, a) => {
        let newState ={...s};

        if (a.type===ACT_AGREGAR_AL_CARRITO) {
            let productoElegido = null;
            for (let producto of s.productos){
                if (producto.id == a.id){
                    productoElegido = producto;
                }
            }
            newState.carritoDeCompras = [...newState.carritoDeCompras, productoElegido];
        }

        return newState;
    },
    preloadedState: {
        productos : productos,
        carritoDeCompras : []
    }
});

export default store;

