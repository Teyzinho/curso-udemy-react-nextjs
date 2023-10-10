import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="texto" />);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render img logo', () => {
    renderTheme(<LogoLink link="#target" srcImg="/images" text="texto" />);
    expect(screen.getByRole('img', { name: 'texto' }));
  });
});
