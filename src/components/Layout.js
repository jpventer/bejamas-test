import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../lib/hooks'

import Menu from './Menu'
import GlobalStyle from '../lib/GlobalStyle'
import Footer from './Footer'

function Layout(props) {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription

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
      <GlobalStyle/>
      <Menu/>  
        <main>          
          {props.children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout
