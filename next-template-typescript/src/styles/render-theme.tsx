import ThemeProvider from './ThemeProvider';
import { render } from '@testing-library/react';

export const renderTheme = (children) => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
