import ThemeProvider from '@/styles/ThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import './globals.css';
import P from 'prop-types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: P.node,
};
