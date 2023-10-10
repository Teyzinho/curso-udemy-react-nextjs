import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render', () => {
    renderTheme(<GridContent {...mock} />);
  });
});
