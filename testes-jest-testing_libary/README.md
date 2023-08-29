# Jest

O Jest é um framework de testes de JavaScript amplamente utilizado para testar aplicações JavaScript e Node.js. Ele oferece uma abordagem abrangente para testar código, incluindo funções, componentes e módulos, garantindo a qualidade do software e a detecção precoce de erros.

## Exemplo Simples de testes:
``` js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

``` js
// math.test.js
const { add } = require('./math');

test('soma 1 + 2 para ser igual a 3', () => {
  expect(add(1, 2)).toBe(3);
});
```
## Estrutura de teste

``` js
describe('makePoniesPink', () => {
  beforeAll(() => {
    /* Runs before all tests */
  })
  afterAll(() => {
    /* Runs after all tests */
  })
  beforeEach(() => {
    /* Runs before each test */
  })
  afterEach(() => {
    /* Runs after each test */
  })

  test('make each pony pink', () => {
    const actual = fn(['Alice', 'Bob', 'Eve'])
    expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
  })
})

```

## Função de Coverage

```
npm test -- --coverage
```

### Documentação Oficial : 
https://jestjs.io/pt-BR/
### Repositório :
https://github.com/sapegin/jest-cheat-sheet

# Mocks em Testes com Jest

Os mocks, também conhecidos como "mock objects" ou "simulacros", são ferramentas essenciais no mundo dos testes de software. Eles permitem simular o comportamento de partes do sistema que o código em teste depende, como funções, módulos ou objetos externos, sem realmente executar o código real. Isso é particularmente útil para isolar o código em teste e garantir que os testes se concentrem apenas na unidade que está sendo testada.

## Por que Usar Mocks:
- Isolamento: Ao isolar as dependências do código em teste, você pode garantir que os resultados dos testes se devam apenas à unidade testada, não sendo afetados por outros componentes.

- Eficiência: Mocks evitam a necessidade de acessar recursos externos, como bancos de dados ou APIs, tornando os testes mais rápidos e eficientes.

- Controle de Comportamento: Mocks permitem definir o comportamento específico que você deseja para as dependências simuladas, facilitando a criação de cenários de teste precisos.