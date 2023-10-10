import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render TextComponent with Text', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
});
