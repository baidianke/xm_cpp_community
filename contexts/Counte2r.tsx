import { useReducer, useContext, createContext } from 'react';
import type { ReactNode } from 'react';

const CounterStateContext = createContext<number>(undefined!)
// const CounterDispatchContext = createContext<Dispatch<SetStateAction<typeof defaultValue>>>(undefined!)

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',

}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
}

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREASE':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

// export const CounterProvider = ({ children }: {children: ReactNode}) => {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <CounterDispatchContext.Provider value={dispatch}>
//       <CounterStateContext.Provider value={state}>
//         {children}
//       </CounterStateContext.Provider>
//     </CounterDispatchContext.Provider>
//   )
// }

export const useCount = () => useContext(CounterStateContext)
// export const useDispatchCount = () => useContext(CounterDispatchContext)
