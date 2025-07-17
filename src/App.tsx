import "./App.css";
import { useCountStore } from "./count-store";
import CountProvider from "./CountProvider";

type AppProps = {
  initialCount: number;
};

function App({ initialCount = 5 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <h1> Zustand with Context Provider example!</h1>
      <ExampleSubComponent />
    </CountProvider>
  );
}

// example sub component that should only be used while being wrapped
// with CountProvider
function ExampleSubComponent() {
  const count = useCountStore((state) => state.count);
  console.log("Count: ", count);

  return <>Hello World!</>;
}

export default App;
