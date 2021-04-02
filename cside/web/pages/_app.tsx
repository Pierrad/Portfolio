import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig'

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={darkmode.toggle}>Switch Mode</button>
      <button onClick={darkmode.enable}>Dark Mode</button>
      <button onClick={darkmode.disable}>Light Mode</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}
