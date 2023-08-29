# Configuração Para desenvolvimento

## ESLint

- ESLint é um linter de código JavaScript que ajuda a encontrar erros e problemas de estilo. Ele é uma ferramenta essencial para qualquer desenvolvedor JavaScript, pois ajuda a escrever código de alta qualidade e consistente.

## Prettier

- Prettier é um formatador de código JavaScript que ajuda a tornar o código mais limpo e legível. Ele é uma ferramenta complementar ao ESLint, pois ajuda a formatar o código de acordo com as regras definidas pelo ESLint.

## EditorConfig

- EditorConfig é uma ferramenta que ajuda a definir configurações de formatação de código para diferentes editores de texto. Ele é uma ferramenta útil para garantir que todos os desenvolvedores de um projeto usem as mesmas configurações de formatação.

## PropTypes

- PropTypes são uma maneira de validar os tipos de dados das propriedades de componentes React. Eles são uma ferramenta importante para garantir que o código React seja robusto e seguro.

## Instalação eslint

Criar o Arquivo .eslintrc.js e configura-lo

ou

rodar o comando:

```

    npx eslint --init

    ou

    npm init @eslint/config

```

```

    npm i -D prettier eslint-config-prettier eslint-plugin-prettier

```

## Instalação editorconfig

  Crie um arquivo .editorconfig em sua raiz do projeto.

## Instalação prettier

  Crie um arquivo .prettierrc.js em sua raiz do projeto.

## Prop-Types

os eslint pode ser configurado para que você tenha que passar prop types

```

    npm i prop-types

```

### Exemplo de prop-types

```jsx
import P from 'prop-types';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
```

## Comandos

Comando para o eslint arrumar todos os arquivos jsx

```

  npx eslint src/**/*.jsx --fix

```
## Vantagens

O uso de ESLint, Prettier, EditorConfig e PropTypes traz uma série de vantagens para projetos React, incluindo:

- Codigo mais consistente e legível: O ESLint, Prettier e EditorConfig ajudam a garantir que todos os desenvolvedores de um projeto usem as mesmas regras de formatação e estilos de código. Isso torna o código mais fácil de ler e entender, tanto para desenvolvedores novos quanto experientes.

- Menos erros e bugs: O ESLint ajuda a encontrar erros e problemas de estilo no código, antes que eles sejam executados. Isso ajuda a evitar erros e bugs que podem causar problemas no projeto.

- Código mais seguro: PropTypes ajudam a validar os tipos de dados das propriedades de componentes React. Isso ajuda a garantir que o código seja robusto e seguro contra erros.

## Conclusão

ESLint, Prettier, EditorConfig e PropTypes são ferramentas essenciais para qualquer desenvolvedor React. Elas ajudam a escrever código de alta qualidade, consistente, seguro e livre de erros.
