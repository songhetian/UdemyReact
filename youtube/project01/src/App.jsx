import './App.css';
import {useCallback, useState} from "react";

function Child() {
    console.log("子组件渲染");
    return <>
        <h1>Child</h1>
    </>;
}

// const Child = memo(() => {
//     console.log("子组件渲染");
//     return <>
//         <h1>Child</h1>
//     </>;
// });

function App() {
    const init = {status: false, title: 0};
    const [number, setNumber] = useState(init);

    // console.log({...init});
    const handleSubmit = useCallback(
        () => {
            console.log("submit");
        },
        []
    );

    return <>
        <h1>{number.title}</h1>
        <Child/>
        <button onClick={handleSubmit}>Click Me!</button>
    </>;
}

export default App;
