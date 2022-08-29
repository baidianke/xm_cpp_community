import { createContext, useState } from "react";
import type { ReactNode } from 'react';

export type CounterContextType = {
  count: number;
  increase: () => void;
  decrease: () => void;
}
export const CounterContext = createContext<CounterContextType | null>(null);

const CountProvider = ({ children }: {children: ReactNode}) => {
  const [count, setCount] = useState<number>(0);
  const increase = () => {
    setCount(c => c + 1)
  }
  const decrease = () => {
    setCount(c => c - 1)
  }

  return <CounterContext.Provider value={{count, increase, decrease}}>{children}</CounterContext.Provider>
};

export default CountProvider;