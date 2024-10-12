import { createContext, useContext, useState } from "react";

const myContext = new createContext();

function TestUseContext() {
  const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{ count, setCount }}>
      <h1>{count}</h1>
      <ChildComponent />
    </myContext.Provider>
  );
}

function ChildComponent() {
  const { count, setCount } = useContext(myContext);
  return <div onClick={() => setCount((c) => c + 1)}>ChildComponent: {count}</div>;
}

export default TestUseContext;
