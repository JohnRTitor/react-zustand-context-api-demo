import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

// Accessing outside a react component
const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("Count: ", count);
};

const setCount = (value: number) => {
  useCounterStore.setState({ count: value });
};

function App() {
  // Accessing inside a React component
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
    setCount(4);
    logCount();
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button
          onClick={() => {
            incrementAsync();
          }}
        >
          Increment
        </button>{" "}
        <button
          onClick={() => {
            decrement();
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
