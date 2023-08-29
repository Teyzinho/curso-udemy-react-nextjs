import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from ".";

describe("<Button />", () => {
  it('should render the button with the text "Load more" ', () => {
    render(<Button text="Load more" />);
    expect.assertions(1); // verifica a Quantidade de "assertions" que deve ter no teste, para ter certeza que um "expect" ocorreu

    const button = screen.getByRole("button", { name: /load more/i }); // Cont que procura o elemento button, com o texto 'load more' com uma 'regular expression'
    expect(button).toBeInTheDocument();
  });

  it("should call function on Button click", () => {
    const fn = jest.fn(); //Criação de um Mock

    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button); //Ativa o evento de click
    expect(fn).toHaveBeenCalledTimes(1); // verifica se o mock fn foi chamado
  });

  it("should be disabled when disabled is true", () => {
    render(<Button text="Load more" disabled={true} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it("should be enabled when disabled is false", () => {
    render(<Button text="Load more" disabled={false} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it("should match the snapshot", () => { //Verifica se o componente foi editado ou não a partir de uma snapshot ('foto')
    const {container} = render(<Button text="Load more" disabled={false} />);
    expect(container.firstChild).toMatchSnapshot()
  });

});
