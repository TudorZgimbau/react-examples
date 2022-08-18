import { useRef, useCallback } from "react";

const InputExample = () => {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={() => console.log(inputRef.current.value)}></button>
    </>
  );
};

const FocusExample = () => {
  return (
    <>
      <input></input>
      <input
        ref={useCallback((node) => {
          if (node) node.focus();
        }, [])}
      ></input>
    </>
  );
};

const UseRefExample = () => {
  return (
    <>
      <div>useRef example</div>
    </>
  );
};

export default UseRefExample;
