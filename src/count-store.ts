import { createContext, useContext } from "react";
import type { StoreApi } from "zustand";
import { useStore } from "zustand";

export type CountStore = {
  count: number;
  inc: () => void;
};

export const CountContext = createContext<StoreApi<CountStore> | undefined>(
  undefined,
);

export function useCountStore<T>(selector: (state: CountStore) => T) {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("CountContext.Provider is missing");
  }

  return useStore(context, selector);
}
