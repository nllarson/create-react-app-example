import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Profile from './Profile'
import RepoList from './RepoList'
import RepoFilter from './RepoFilter'

class User extends Component {
  constructor(args) {
    super(args)
    this.state = { filter: '' }
  }

  handleFilterUpdate = filter => {
    this.setState({ filter })
  }

  render() {
    const { classes } = this.props
    const { filter } = this.state
    const username = this.props.match.params.username
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={3}>
            <Profile username={username} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <RepoFilter onUpdate={this.handleFilterUpdate} />
            <RepoList username={username} filter={filter} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  }
})

export default withStyles(styles)(User)
