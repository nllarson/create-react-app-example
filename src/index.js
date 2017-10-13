import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme()

const repoFinder = Component => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Component/>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

ReactDOM.render(repoFinder(App), document.getElementById('root'))
registerServiceWorker()
