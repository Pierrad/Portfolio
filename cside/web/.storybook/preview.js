import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../styles/ThemeConfig'
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}



export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
