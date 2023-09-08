import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

export const initialState = {
  counter: 0,
  loading: false,
};

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <CounterContext.Provider value={[state, actions.current]}>{children}</CounterContext.Provider>
  );
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
