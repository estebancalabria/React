import React from "react";

export interface ISessionContext {
    user : string | null;
    setUser : (usr:string|null) => void;
}

//Datos por defecto que utilizan cuando no defino un Provider
const state : ISessionContext = {
    user : null,
    setUser : (usr) => {}
}

const SessionContext = React.createContext<ISessionContext>(state);

export default SessionContext;