import { createGlobalStyle } from 'styled-components';

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const theme = {

}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 2rem;
    padding: 0;
  }
`
