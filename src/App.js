import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/user/:username" component={User} />
        <Redirect from="/" to="/user/nllarson" />
      </Switch>
    )
  }
}
