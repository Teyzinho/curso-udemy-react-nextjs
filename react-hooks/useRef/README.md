
# useRef


O useRef é um hook do React que permite armazenar uma referência para um valor. Ele é usado para armazenar dados que não podem ser alterados, como um elemento DOM ou um objeto.


O useRef retorna um objeto com uma propriedade current:

JavaScript

``` jsx
    const ref = useRef(null);

    return (
    <div ref={ref}>
        <p>Este é o elemento DOM armazenado no ref: {ref.current}</p>
    </div>
    );
```

No exemplo acima, o useRef é usado para armazenar uma referência para um elemento DOM. A propriedade current do objeto retornado pelo useRef contém uma referência para o elemento DOM.

O useRef é uma maneira segura de armazenar referências. Ele não atualiza o DOM quando o valor do ref é alterado.

## Exemplos

Aqui estão alguns exemplos de como o useRef pode ser usado:

- Para armazenar uma referência para um elemento DOM:
``` jsx
const ref = useRef(null);

const handleClick = () => {
  ref.current.style.color = 'red';
};

return (
  <div ref={ref}>
    <p>Este é o elemento DOM armazenado no ref: {ref.current}</p>
    <button onClick={handleClick}>Mudar a cor</button>
  </div>
);
```

Use o código com cuidado. Saiba mais
Para armazenar uma referência para um objeto:
``` jsx
const ref = useRef({
  name: 'John Doe',
  age: 25,
});

const handleClick = () => {
  ref.current.age = 26;
};

return (
  <div>
    <p>Este é o objeto armazenado no ref: {ref.current}</p>
    <button onClick={handleClick}>Atualizar a idade</button>
  </div>
);
```

Para armazenar uma referência para um valor que não pode ser alterado:
``` jsx
const ref = useRef(Math.random());

return (
  <div>
    <p>Este é o valor armazenado no ref: {ref.current}</p>
  </div>
);
```

**Dicas**

* O `useRef` não deve ser usado para armazenar dados que podem ser alterados. O `useState` é uma maneira mais segura de armazenar dados que podem ser alterados.
* O `useRef` deve ser usado com cautela. Ele pode levar a vazamentos de memória se não for usado corretamente.