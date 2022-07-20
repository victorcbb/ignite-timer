import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaulTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
