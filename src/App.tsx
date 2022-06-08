import { useState } from 'react'
import { Container } from './App'
import { Header } from './components/Head'

import GlobalStyle from './styles/global'

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  )
}

export default App
