import { useEffect, useState } from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    console.log("没有第二个参数");
  });

  useEffect(() => {
    console.log("数组中没有值~~~");
  }, []);

  useEffect(() => {
    console.log("数组中有值~~~");
  }, [count]);

  useEffect(() => {
    console.log("回调函数", count);
    return () => {
      setCount(0);
      console.log("回调函数中的值", count);
    };
  }, [count]);

  const style = {
    border: "none",
    backgroundColor: "#142DFF",
    padding: "20px",
    color: "#fff",
    borderRadius: "20px",
    boxShadow: "5px 10px 5px rgba(0,0,0,0.5)",
    cursor: "pointer",
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={handleAdd}
        style={style}>
        点击加
      </button>
    </>
  );
}

export default TestUseEffect;
