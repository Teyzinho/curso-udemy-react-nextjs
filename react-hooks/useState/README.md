
# useState

O useState é um hook do React que permite manter o estado de um componente. Ele é usado para armazenar dados que podem mudar ao longo do tempo, como o valor de um input ou o número de itens em uma lista.

O useState retorna um array com dois valores:

- O primeiro valor é o valor atual do estado.

- O segundo valor é uma função que pode ser usada para atualizar o estado.
Para atualizar o estado, basta chamar a função retornada pelo useState com o novo valor.

JavaScript
``` jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};

return (
  <div>
    <p>O número atual é {count}</p>
    <button onClick={handleClick}>Adicionar 1</button>
  </div>
);

```
No exemplo acima, o useState é usado para armazenar o número de vezes que o botão Adicionar 1 foi clicado. A função handleClick chama a função retornada pelo useState para atualizar o estado com o novo valor.