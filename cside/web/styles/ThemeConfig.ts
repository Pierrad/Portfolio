import { css, createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
      font-family: 'Poppins-Black';
      src: url('/fonts/Poppins/Poppins-Black.woff') format('woff');
  }
  @font-face {
      font-family: 'Poppins-Bold';
      src: url('/fonts/Poppins/Poppins-Bold.woff') format('woff');
  }
  @font-face {
      font-family: 'Poppins-Regular';
      src: url('/fonts/Poppins/Poppins-Regular.woff') format('woff');
  }
`

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}

export const colors = {
  purple: '#8C30F5',
  lightPurple: '#F1E4FF',
  orange: '#F6AE2D',
  red: '#FF0000',
}

export const textStyles = {
  title: css`
    font-family: 'Poppins-Black';
    font-size: 7.2rem;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
  `,
  subtitle: css`
    font-family: 'Poppins-Bold';
    font-size: 2.4rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
  `,
  navTitle: css`
    font-family: 'Poppins-Bold';
    font-size: 2.4rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.purple};
    margin: 0;
  `,
  texte: css`
    font-family: 'Poppins-Regular';
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    margin: 0;
  `,
}
