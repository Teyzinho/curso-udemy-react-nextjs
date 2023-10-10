import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render Heading with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('color', theme.colors.primary);
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xhuge);
    expect(heading).toHaveStyleRule('text-transform', 'none');
  });

  it('should render with withe color', () => {
    renderTheme(<Heading color_dark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('color', theme.colors.white);
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.medium);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.large,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xhuge,
    );
  });

  // it('should render correct font-sze when using mobile', () => {
  //   renderTheme(<Heading size="huge">texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
  //     media: theme.media.lteMedium,
  //   });
  // });

  it('should render with uppercase', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('text-transform', 'uppercase');
  });
});
