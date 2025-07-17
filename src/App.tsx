import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button
          onClick={() => {
            increment();
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
