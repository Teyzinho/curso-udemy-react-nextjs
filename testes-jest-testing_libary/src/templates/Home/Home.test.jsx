import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '.';

// Intersepta as chamadas para Api externas e executa aqui
const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
          url: 'img1.jpg',
        },
        {
          userId: 1,
          id: 2,
          title: 'title 2',
          body: 'body 2',
          url: 'img2.jpg',
        },
        {
          userId: 1,
          id: 3,
          title: 'title 3',
          body: 'body 3',
          url: 'img3.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  // Ligando o servidor mock
  beforeAll(() => {
    server.listen();
  });

  // Resetando o server a cada teste para nenhum teste atrapalhar o outro
  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  test('should render search, posts and load more', async () => {
    render(<Home />);

    //screen.debug(); // Função de debug (console.log)

    const noMorePosts = screen.getByText('Não existem posts =(');

    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should serach for posts', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Não existem posts =(');

    expect.assertions(12);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');
    expect(search).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 2 2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 3 3' })).not.toBeInTheDocument();

    act(() => {
      userEvent.type(search, 'title 1');
    });
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 3 3' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search value: title 1' })).toBeInTheDocument();

    act(() => {
      userEvent.clear(search);
    });
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 2 2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 3 3' })).not.toBeInTheDocument();

    act(() => {
      userEvent.type(search, 'nao existe');
    });
    expect(screen.getByText('Não existem posts =(')).toBeInTheDocument();
  });

  it('should load more posts when click more posts button', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts =(');

    expect.assertions(2);

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', { name: /load more posts/i });

    act(() => {
      button.click();
    });
    expect(screen.getByRole('heading', { name: 'title 3 3' })).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
