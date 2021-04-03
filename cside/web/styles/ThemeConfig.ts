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
    font-family: '../static/fonts/Poppins/Poppins-Black.ttf';
    font-size: 7.2rem;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  `,
  subtitle: css`
    font-family: '../static/fonts/Poppins/Poppins-Bold.ttf';
    font-size: 2.4rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  `,
  navTitle: css`
    font-family: '../static/fonts/Poppins/Poppins-Bold.ttf';
    font-size: 2.4rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.purple};
  `,
  texte: css`
    font-family: '../static/fonts/Poppins/Poppins-Regular.ttf';
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  `,
}
