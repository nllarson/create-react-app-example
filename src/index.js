import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

const theme = createMuiTheme()

const repoFinder = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/user/:username" component={App} />
          <Redirect from="/" to="/user/nllarson" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

ReactDOM.render(repoFinder(), document.getElementById('root'))
