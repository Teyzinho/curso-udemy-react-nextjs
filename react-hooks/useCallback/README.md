# Guia Rápido para o useCallback no React

O `useCallback` é um hook no React que é usado para otimizar o desempenho, memorizando funções callback e evitando a recriação desnecessária delas em cada renderização.

## Quando usar o useCallback

Use o `useCallback` quando:

- Funções callback são passadas como props para componentes filhos.
- As funções callback são recriadas a cada renderização, causando possível re-renderização desnecessária dos componentes filhos.
- Você deseja melhorar a performance otimizando a criação de funções.

## Como usar o useCallback

```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Use useCallback para memorizar a função callback
  const handleButtonClick = useCallback(() => {
    setCounter((c) => c + num);
  }, []); // Dependência que aciona a recriação da função

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleButtonClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}

export default ParentComponent;
```

## Documentação

https://pt-br.legacy.reactjs.org/docs/hooks-reference.html#usecallback