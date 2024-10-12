import { createContext, memo, useCallback, useContext, useMemo, useState } from "react";

const myContext = new createContext();

function TestMemo() {
  console.log("父组件渲染~~~");
  const [count, setCount] = useState(0);
  const fn1 = useCallback(() => {}, []);
  // const fn1 = () => {}
  console.time("xxx");
  let a = useMemo(() => {
    let a = 0;
    for (let i = 0; i < 1000000000; i++) {
      a += i;
    }
    return a;
  }, [count]);

  console.log(a);
  console.timeEnd("xxx");
  return (
    // <myContext.Provider value={count}>
    <>
      <h1 onClick={() => setCount(count + 1)}>父组件--{count}</h1>
      <Child fn={fn1} />
    </>
    // </myContext.Provider>
  );
}

// eslint-disable-next-line react/display-name
const Child = memo(function () {
  console.log("子组件渲染~~~");
  const [number, setNumber] = useState(0);
  const context = useContext(myContext);
  return (
    <>
      <h1>子组件--{context}</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>点我我</button>
    </>
  );
});
// Child.propTypes = {
//     count: PropTypes.number
// };

export default TestMemo;
