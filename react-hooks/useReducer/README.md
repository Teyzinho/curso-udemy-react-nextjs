# Guia Rápido para o useReducer no React

O `useReducer` é um hook no React que é usado para gerenciar o estado de um componente de forma mais avançada e flexível do que o `useState`. Ele é útil quando o estado do componente envolve lógicas complexas ou quando várias ações precisam ser tratadas de forma centralizada.

## Quando usar o useReducer

Use o `useReducer` quando:

- O estado do componente possui uma estrutura complexa.
- Existem várias ações diferentes que podem modificar o estado.
- É necessário passar o estado e as ações para componentes filhos.

## Como usar o useReducer

```jsx
import React, { useReducer } from 'react';

// Defina o reducer que especifica como o estado deve ser atualizado com base na ação
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

function Counter() {
  // Use o useReducer com o estado inicial e o reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```