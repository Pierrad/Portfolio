import { ThemeProvider } from 'styled-components'
import { useState, useEffect, ReactFragment } from 'react'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }: AppProps): ReactFragment {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider session={pageProps.session}>{isMounted && <Component {...pageProps} />}</Provider>
    </ThemeProvider>
  )
}
