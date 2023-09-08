import P from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const initialState = {
  counter: 0,
  loading: false,
};

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext in a Provider');
  }

  return [...context];
};
