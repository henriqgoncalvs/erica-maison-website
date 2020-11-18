import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function GlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export const withGlobalProvider = (Component) => (
  (props) => (
    <GlobalProvider>
      <Component {...props} />
    </GlobalProvider>
  )
);

export default GlobalProvider;
