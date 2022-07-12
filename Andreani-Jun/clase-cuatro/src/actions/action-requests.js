import RequestActions from "./actions"

//hago una copia para que no apunten al mismo objeto
const Actions = {...RequestActions};

for (let act in Actions){
    Actions[act] = "REQUEST_" + act;
}

export default Actions;