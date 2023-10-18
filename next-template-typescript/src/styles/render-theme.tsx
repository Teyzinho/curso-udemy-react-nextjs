import ThemeProvider from './ThemeProvider';
import { render } from '@testing-library/react';

export const renderTheme = (children : React.ReactNode) => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
