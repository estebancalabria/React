import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { createStore } from "redux";

//action types
const ACT_INCREMENTAR = "ACT_INCREMENTAR";
const ACT_DECREMENTAR = "ACT_DECREMENTAR";

//action creators
function actIncrementar(){
    return{
        type : ACT_INCREMENTAR
    }
}

function actDecrementar(){
    return {
        type : ACT_DECREMENTAR
    }
}

//el reducer
function reducer (state, action){
    let newState = {...state}
    switch (action.type) {
        case ACT_INCREMENTAR:
            newState.count++
            break;
        case ACT_DECREMENTAR:
            newState.count--;
            break;
        default:
            break;
    }
    return newState;
}

//store
const theOnlySourceOfTruth = createStore(reducer, {count:7});

const Contador = (props) => {
    //en vez del map state to props
    const count = useSelector(state => (state.count))
    return (<div>
        Contador Redux con Hooks: {count}
    </div>);
}

const Mas = (props) => {
    const dispatch = useDispatch();
    return (<button onClick={()=>{dispatch(actIncrementar())}}>
        +
    </button>);
}
 
const Menos = (props) => {
    const dispatch = useDispatch();
    return (<button onClick={()=>{dispatch(actDecrementar())}}>
        -
    </button>)
}
 

const UseReduxDemo = () => {
    return (<Provider store={theOnlySourceOfTruth}>
        <Contador />
        <Mas />
        <Menos />
    </Provider>);
}
 
export default UseReduxDemo;