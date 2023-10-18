"use client"

import { ThemeProvider as Provider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    )
}

export default ThemeProvider;
