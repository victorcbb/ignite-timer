import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaulTheme } from './styles/themes/default'
import { CycleContextProvider } from './contexts/CycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
