import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    renderTheme(<GridText {...mock} />);
  });
});
