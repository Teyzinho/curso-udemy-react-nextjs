# Guia Rápido para o useEffect no React

O `useEffect` é um hook no React que permite realizar operações secundárias, como efeitos colaterais, em componentes funcionais. Ele é usado principalmente para interações com APIs externas, manipulação do DOM e gerenciamento de subscrições.

## Quando usar o useEffect

Use o `useEffect` quando:

- Você precisa executar código após a renderização do componente.
- Deseja buscar ou atualizar dados de uma API.
- Precisa interagir com o DOM, como adicionar ou remover elementos.
- Quer gerenciar subscrições a eventos ou temporizadores.

## Como usar o useEffect

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Código a ser executado após a renderização
    fetchData().then((response) => {
      setData(response);
    });

    // Função de limpeza (opcional)
    return () => {
      // Código a ser executado antes da próxima renderização
      cleanup();
    };
  }, []); // Array de dependências

  return <div>{data}</div>;
}

export default ExampleComponent;
```

## Documentação 
https://pt-br.legacy.reactjs.org/docs/hooks-effect.html