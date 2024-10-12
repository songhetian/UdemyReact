import {useReducer} from "react";

function CountReducer() {
    function reducer(count, action) {
        switch (action.type) {
            case "jia" :
                return count + 1;
            case "jian" :
                return count - 1;
            default :
                return count;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "jia"})}>加</button>
        </div>

    );
}

export default CountReducer;