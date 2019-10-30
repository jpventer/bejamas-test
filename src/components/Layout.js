import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../lib/hooks'
import { ThemeProvider } from 'styled-components'

import { useDarkMode } from '../lib/hooks/useDarkMode'
import { lightTheme, darkTheme } from '../lib/Theme'

import GlobalStyle from '../lib/GlobalStyle'
import Menu from './Menu'
import Footer from './Footer'



function Layout(props) {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription
  
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme; 


  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyle/>          
          <Menu toggleTheme={toggleTheme} theme={theme} />  
            <main>          
              {props.children}
            </main>
          <Footer />
        </>
      </ThemeProvider>
    </div>
  )
}

export default Layout
