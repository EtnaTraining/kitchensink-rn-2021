import React, { createContext } from 'react';
import { CounterReducer } from '../reducers/Counter';

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = React.useReducer(CounterReducer, { count: 0 });
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  const value = {
    count: state.count,
    increment,
    decrement,
    reset,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
