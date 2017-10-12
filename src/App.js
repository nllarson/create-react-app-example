import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Profile from './components/Profile'
import RepoList from './components/RepoList'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <Profile/>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Typography type="headline">Repositories</Typography>
              <RepoList/>
            </Grid>
          </Grid>
        </Paper>
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
