import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

const themes = [{
  colors: {
    light: '#2980b9',
    dark: '#2c3e50',
    gradient: 'linear-gradient(to left, #2980b9, #2c3e50)'
  }
}, {
  colors: {
    light: '#414345',
    dark: '#232526',
    gradient: 'linear-gradient(to right, #232526, #414345);'
  }
}];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}