import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

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
