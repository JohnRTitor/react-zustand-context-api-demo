import { create } from "zustand";

interface CounterStore {
  count: number;
}

export const useCounterStore = create<CounterStore>(() => ({
  count: 0,
}));
