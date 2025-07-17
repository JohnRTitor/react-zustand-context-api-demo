import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
}

// create a custom hook called useCounterStore,
// in which you set the initial value of count
// you can also define functions like
// increment, decrement
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementAsync: async () => {
    // just wait for 1 second, to simulate data fetching from an API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // then increment
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
// BEST PRACTICE: we should have unrelated functions and states in different stores
// as it makes the code more modular
