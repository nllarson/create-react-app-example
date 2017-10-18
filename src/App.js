import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import RepoFilter from './components/RepoFilter'

class App extends Component {
  constructor(args) {
    super(args)
    this.state = { filter: '' }
  }

  handleFilterUpdate = filter => {
    this.setState({ filter })
  }

  render() {
    const { filter } = this.state
    const username = this.props.match.params.username
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Profile username={username} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <RepoFilter onUpdate={this.handleFilterUpdate} />
          <RepoList username={username} filter={filter} />
        </Grid>
      </Grid>
    )
  }
}

export default App
