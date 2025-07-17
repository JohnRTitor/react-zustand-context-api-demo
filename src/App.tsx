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
  // we can also get the whole state and destructure the count like this
  // but it is less performant, as the component know listens to the entire state
  // and rerender when the entire state changes, which is a problem. This is NOT a best practice
  // const { count } = useCounterStore((state) => state);
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
