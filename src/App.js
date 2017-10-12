import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Profile from './components/Profile'
import RepoList from './components/RepoList'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={3}>
              <Profile />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Typography color="secondary" type="subheading">Repositories</Typography>
                <RepoList />
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

export default withStyles(styles)(App)
