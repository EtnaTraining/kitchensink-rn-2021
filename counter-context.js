import * as React from 'react';

const CounterContext = React.createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    case 'reset': {
      return { count: 0 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
    reset: () => dispatch({ type: 'reset' }),
    count: state.count,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export { CounterProvider, CounterContext };
