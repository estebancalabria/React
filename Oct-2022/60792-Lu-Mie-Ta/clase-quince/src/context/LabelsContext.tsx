import { createContext } from "react";

export interface AppLabels {
    titulo : string;
}

export default createContext<AppLabels>({
    titulo : "Vamos Argentina"
});