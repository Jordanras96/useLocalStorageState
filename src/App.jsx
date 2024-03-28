import { useEffect, useState } from "react";


function useLocalStorageState(initialValue, key) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}

const App = () => {
  const getCountValueOnLocalStorage = () => {
    console.log("lazy initializer");
    return Number(localStorage.getItem("count") || "0");
  };
  const [count, setCount] = useLocalStorageState(
    getCountValueOnLocalStorage,
    "count"
  );
  const [step, setStep] = useState(1);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
  };
  console.log("Re-render");
  return (
    <div>
      <h1>Counter: {count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

const AppParent = () => {
  const [isMounted, setIsMounted] = useState(true);
  return (
    <div>
      <button onClick={() => setIsMounted(!isMounted)}>Force unmount</button>
      {isMounted ? <App /> : null}
    </div>
  );
};

export default AppParent;
