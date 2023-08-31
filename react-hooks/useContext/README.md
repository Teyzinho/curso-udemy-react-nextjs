# Guia Rápido para o useContext no React

O `useContext` é um hook no React que permite compartilhar dados, como o estado, entre componentes sem a necessidade de passar props manualmente através da árvore de componentes.

## Quando usar o useContext

Use o `useContext` quando:

- Vários componentes precisam acessar os mesmos dados, como configurações ou estado global.
- A propagação de props entre componentes se torna difícil ou confusa.
- Você deseja evitar múltiplos níveis de aninhamento para passar dados.

## Como usar o useContext

```jsx
import React, { useContext, createContext } from 'react';

// Crie um contexto
const MyContext = createContext();

// Provedor do contexto para encapsular os componentes que deseja compartilhar o estado
function MyContextProvider({ children }) {
  const sharedState = /* algum estado que você deseja compartilhar */;

  return <MyContext.Provider value={sharedState}>{children}</MyContext.Provider>;
}

function ComponentA() {
  // Use o useContext para acessar o estado compartilhado
  const sharedState = useContext(MyContext);

  return <div>{sharedState}</div>;
}

function ComponentB() {
  const sharedState = useContext(MyContext);

  return <div>{sharedState}</div>;
}

function App() {
  return (
    <MyContextProvider>
      <ComponentA />
      <ComponentB />
    </MyContextProvider>
  );
}

export default App;
```

## Documentação:
https://pt-br.legacy.reactjs.org/docs/hooks-reference.html#usecallback