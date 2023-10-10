import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    renderTheme(<GridImage {...mock} />);
  });
});
