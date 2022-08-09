import React from "react";

export interface ISessionContext {
    user : string | null;
}

//Datos por defecto que utilizan cuando no defino un Provider
const state : ISessionContext = {
    user : null
}

const SessionContext = React.createContext<ISessionContext>(state);

export default SessionContext;