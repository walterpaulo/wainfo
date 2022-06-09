import { useState } from 'react'
import { Container } from './AppStyle'
import { Header } from './components/Header'

import GlobalStyle from './styles/global'

export const App = ()=>{
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  )
}