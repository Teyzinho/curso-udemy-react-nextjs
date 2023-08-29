import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { TextInput } from ".";

describe("</TextInput />", () => {
  it("should have a value of seachValue", () => {
    const fn = jest.fn(); //mock função
    render(<TextInput handleChange={fn} searchValue={'test'}/>)

    const input = screen.getByPlaceholderText(/type your search/i)
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('test')
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn(); //mock função
    render(<TextInput handleChange={fn}/>)

    const input = screen.getByPlaceholderText(/type your search/i)

    const typeValue = 'value'

    userEvent.type(input, typeValue) //Simulação do usuário digitando typeValue tecla por tecla
    
    expect(input.value).toBe(typeValue)
    expect(fn).toHaveBeenCalledTimes(typeValue.length) // espera que a função fn seja chamada o numero de letras do typeValue
  });

  it("should match snapshot", () => {
    const {container} = render(<TextInput />)

    expect(container.firstChild).toMatchSnapshot()
  });
});
