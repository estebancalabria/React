import { configureStore } from "@reduxjs/toolkit";

//action-types.js
export const ACT_INIT_PERSONAJES = "ACT_INIT_PERSONAJES";

//action-creators.js
export function crearAccionInitPersonajes(personajes){
    return {
        type  : ACT_INIT_PERSONAJES,
        personajes : personajes
    }
}


function reducer(state, action){
    let newState = {...state};
    (action.type == ACT_INIT_PERSONAJES) && (newState.personajes = action.personajes);
    return newState;
}

export default configureStore({
    reducer : reducer,
    preloadedState :{
        personajes : [
            {
                "_id": "63e32e1fedf49032166cf07b",
                "Nombre": "Krusty el payaso ",
                "Historia": "Herschel Schmoeckel Pinchas Yerucham Krustofsky (apellido que también se escribe Krustofski ) es el cínico, quemado y plagado de adicciones payaso presentador del programa de televisión favorito de Bart y Lisa",
                "Imagen": "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Krusty_the_Clown_nz1z1o.png",
                "Genero": "Masculino",
                "Estado": "Vivo",
                "Ocupacion": "Personalidad de televisión",
                "updatedAt": "2023-03-13T00:30:55.514Z"
              },
              {
                "_id": "63e338abedf49032166da2e6",
                "Nombre": "Cletus",
                "Historia": "Cletus Del Roy Montfort Bigglesworth Spuckler , también conocido como Cletus the Slack-Jawed Yokel , es un campesino sureño estereotípico con una personalidad afable, es delgado y generalmente se lo representa con un par de jeans. Reside con su familia en la Ruta Rural 9 en Springfield .",
                "Imagen": "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Cletus_Spuckler_rvpr9g.png",
                "Genero": "Masculino",
                "Estado": "Vivo",
                "Ocupacion": "Granjero, trabajador de la construcción"
              }
        ]
    }
})