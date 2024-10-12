import {useReducer} from "react";

function reducer(count, action) {
    if (action.type === 'jia') return count + 1;
}

function TestUseReducer() {
    let a = 100;

    function init(c) {
        return c + 200;
    }

    const [count, dispatch] = useReducer(reducer, a, init);
    return (
        <>
            <h1>Hello World---{count}</h1>
            <button onClick={() => dispatch({type: 'jia'})}>混合</button>
        </>
    );
}

export default TestUseReducer;