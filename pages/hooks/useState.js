import { useState, useEffect } from "react";

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <div>loading...</div>;

  return <div>content</div>;
};

const HTMLExample = () => {
  const [render, setRender] = useState(<div>loading...</div>);

  // Ignore this for now!
  // Changes the rendered content after 2 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(<div>content loaded!</div>);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return render;
};

const PropExample = () => {
  const [color, setColor] = useState("green");

  return <div style={{ color: color }}>example color</div>;
};

const UseEffectExample = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </>
  );
};

const UseStateExample = () => {
  return (
    <>
      <div>useState example</div>
    </>
  );
};

export default UseStateExample;
