# Guia Rápido para o useMemo no React

O `useMemo` é um hook no React que permite otimizar o desempenho, memorizando valores calculados e evitando recálculos desnecessários em componentes funcionais.

## Quando usar o useMemo

Use o `useMemo` quando:

- Você tem uma função que é computacionalmente intensiva e é chamada frequentemente.
- Dados precisam ser processados antes de serem renderizados.
- Você deseja evitar recriar instâncias de objetos em cada renderização.

## Como usar o useMemo

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ data }) {
  // Use useMemo para memorizar o resultado do cálculo
  const processedData = useMemo(() => {
    // Alguma lógica de processamento intensivo com 'data'
    return /* resultado do processamento */;
  }, [data]); // Dependência que aciona o recálculo

  return <div>{processedData}</div>;
}

function App() {
  const [data, setData] = useState(/* dados */);

  return (
    <div>
      <ExpensiveComponent data={data} />
      {/* Outros componentes */}
    </div>
  );
}

export default App;
```