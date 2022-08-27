export const initialState = `import { ICounterContextState } from "../../interfaces/contexts/counter";

const initialState: ICounterContextState = {
  count: 0,
};

export default initialState;`;

export const actions = `export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";`;

export const reducer = `import {
  ICounterContextState,
  ICounterContextAction,
} from "../../interfaces/contexts/counter";
import { DECREMENT, INCREMENT, RESET } from "./actions";
  
export default function counterReducer(
  state: ICounterContextState,
  action: ICounterContextAction
): ICounterContextState {
  const { count } = state;
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        count: count + payload,
      };
    case DECREMENT:
      return {
        count: count - payload,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
}`;

export const actionCreator = `import { Dispatch } from "react";
import { ICounterContextAction } from "../../interfaces/contexts/counter";
import { DECREMENT, INCREMENT, RESET } from "./actions";

const createActions = (dispatch: Dispatch<ICounterContextAction>) => ({
  increment: (value: number) => dispatch({ type: INCREMENT, payload: value }),
  decrement: (value: number) => dispatch({ type: DECREMENT, payload: value }),
  reset: () => dispatch({ type: RESET }),
});

export default createActions;`;

export const provider = `import { createContext, ReactNode, useReducer } from "react";
import { ICounterContextValue } from "../../interfaces/contexts/counter";
import { TCounterReducer } from "../../types/contexts/counter";
import createActions from "./actionCreator";
import initialState from "./initialState";
import counterReducer from "./reducer";

export const CounterContext = createContext<ICounterContextValue | undefined>(
  undefined
);

const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<TCounterReducer>(
    counterReducer,
    initialState
  );

  const actions = createActions(dispatch);

  return (
    <CounterContext.Provider value={{ ...state, ...actions }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;`;

export const hook = `import { useContext } from "react";
import { CounterContext } from "./provider";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }

  return context;
};`;

export const indexContext = `export * from "./hook";
export * from "./provider";`;

export const stateInterface = `export interface ICounterContextState {
  count: number;
}`;

export const actionInterface = `interface IReducerAction<T> {
  type: string;
  payload?: T;
}
  
export interface ICounterContextAction extends IReducerAction<number> {}`;

export const valueInterface = `export interface ICounterContextValue {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
}`;

export const indexInterface = `export * from "./state";
export * from "./action";
export * from "./value";`;

export const reducerType = `import {
  ICounterContextAction,
  ICounterContextState,
} from "../../interfaces/contexts/counter";

export type TCounterReducer = (
  state: ICounterContextState,
  action: ICounterContextAction
) => ICounterContextState;`;

export const indexType = `export * from "./reducer";`;

export const updatedApp = `import Counter from "./components/Counter";
import { CounterContextProvider } from "./contexts/counter";

function App() {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
}

export default App;`;

export const Counter = `import { FC, Fragment } from "react";
import { useCounterContext } from "../contexts/counter";

const Counter: FC = () => {
  const { count, increment, decrement, reset } = useCounterContext();

  return (
    <Fragment>
      <div>Count is: {count}</div>
      <button onClick={() => increment(1)}>increment</button>
      <button onClick={() => decrement(1)}>decrement</button>
      <button onClick={() => increment(5)}>increment by 5</button>
      <button onClick={() => decrement(10)}>decrement by 10</button>
      <button onClick={() => reset()}>reset</button>
    </Fragment>
  );
};

export default Counter;`;
