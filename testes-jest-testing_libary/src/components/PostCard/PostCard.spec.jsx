import { render, screen } from "@testing-library/react";

import { PostCard } from ".";

  //mock de props
const props = {
  title: "Titulo",
  body: "Body",
  id: 1,
  cover: "img/img.png",
};

describe("<PostCard/>", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: props.title }))
      .toHaveAttribute("src", props.cover);
    expect(screen.getByRole('heading',{name: /Titulo 1/i})).toBeInTheDocument()
    expect(screen.getByText(props.body)).toBeInTheDocument()
  });

  it('should match snapshot', () => { //Verifica se o componente foi editado ou não a partir de uma snapshot ('foto')
    const {container} = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot()
  }) 
});
