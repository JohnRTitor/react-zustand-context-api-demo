import { useState, type PropsWithChildren } from "react";
import { createStore } from "zustand";
import { CountContext, type CountStore } from "./count-store";

type CountProviderProps = PropsWithChildren & {
  initialCount: number;
};

// this will only be rendered once
export default function CountProvider({
  children,
  initialCount,
}: CountProviderProps) {
  // this will only be rendered once
  const [store] = useState(() =>
    // actual values of the store may change, but only through zustand
    // so best of both worlds
    createStore<CountStore>((set) => ({
      count: initialCount,
      inc: () => set((state) => ({ count: state.count + 1 })),
    })),
  );

  return (
    <CountContext.Provider value={store}>{children}</CountContext.Provider>
  );
}
