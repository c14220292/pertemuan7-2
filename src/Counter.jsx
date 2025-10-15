import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        case 'set_value':
            return { count: action.payload };
        default:
            throw new Error();
    }
}

export default function Counter(){
    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={ () => dispatch({ type: 'increment' }) }>Tambah</button>
            <button onClick={ () => dispatch({ type: 'decrement' }) }>Kurang</button>
            <button onClick={ () => dispatch({ type: 'reset' }) }>Reset</button>
            <button onClick={ () => dispatch({ type: 'set_value',payload: 100 }) }>Set 100</button>
        </>
    );
}


