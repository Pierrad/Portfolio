import { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from '../node_modules/styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/themeConfig'

function MyApp({ Component, pageProps }) {
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

export default MyApp
