"use client"

import { ThemeProvider as Provider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider = ({children}) => {
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    )
}

export default ThemeProvider;