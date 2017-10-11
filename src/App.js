import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import { GridList, GridListTile } from 'material-ui/GridList'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Badge from 'material-ui/Badge'
import Chip from 'material-ui/Chip'
import Star from 'material-ui-icons/Star'
import CallSplit from 'material-ui-icons/CallSplit'
import Search from 'material-ui-icons/Search'
import Divider from 'material-ui/Divider'
import Input from 'material-ui/Input'

import logo from './logo.svg'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              create-react-app-example
            </Typography>
            <Search className={classes.searchicon}/>
            <Input
              placeholder="Find A User"
              className={classes.input}
              disableUnderline={true}
            />
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Paper>
            <Grid>
              <Grid container>
                <Grid item xs={12} className={classes.userinfo}>
                  <Avatar alt="Nick Larson" src={logo} className={classes.avatar} />
                  <Typography type="subheading">Nick Larson</Typography>
                  <Typography type="caption">nllarson</Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container className={classes.repolist}>
                <Grid item xs={12} lg={4} key="repo-1">
                  <Card className={classes.repo}>
                    <CardContent>
                      <Typography type="body1" className={classes.repotitle}>
                        create-react-app-example
                      </Typography>
                      <Typography component="p">
                        A quick description of this repo, it can probably be fairly long.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Chip label="JavaScript" className={classes.chip} />
                      <Chip
                        avatar={
                          <Avatar>
                            <Star />
                          </Avatar>
                        }
                        label={4}
                      />
                      <Chip
                        avatar={
                          <Avatar>
                            <CallSplit />
                          </Avatar>
                        }
                        label={10}
                      />
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={4} key="repo-2">
                  <Card>
                    <CardContent>
                      <Typography type="body1" className={classes.repotitle}>
                        some-other-repo
                      </Typography>
                      <Typography component="p">Maybe a shorter description</Typography>
                    </CardContent>
                    <CardActions>
                      <Chip label="Java" className={classes.chip} />
                      <Chip
                        avatar={
                          <Avatar>
                            <Star />
                          </Avatar>
                        }
                        label={1}
                      />
                      <Chip
                        avatar={
                          <Avatar>
                            <CallSplit />
                          </Avatar>
                        }
                        label={2}
                      />
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={4} key="repo-3">
                  <Card>
                    <CardContent>
                      <Typography type="body1" className={classes.repotitle}>
                        quick-awesome-work
                      </Typography>
                      <Typography component="p">Just a quick something that I threw together.</Typography>
                    </CardContent>
                    <CardActions>
                      <Chip label="Shell" className={classes.chip} />
                      <Chip
                        avatar={
                          <Avatar>
                            <Star />
                          </Avatar>
                        }
                        label={1}
                      />
                      <Chip
                        avatar={
                          <Avatar>
                            <CallSplit />
                          </Avatar>
                        }
                        label={2}
                      />
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={4} key="repo-4">
                  <Card>
                    <CardContent>
                      <Typography type="body1" className={classes.repotitle}>
                        react-router
                      </Typography>
                      <Typography component="p">A router library for ReactJS</Typography>
                    </CardContent>
                    <CardActions>
                      <Chip
                        avatar={
                          <Avatar>
                            <CallSplit />
                          </Avatar>
                        }
                        label={7}
                      />
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={4} key="repo-5">
                  <Card className={classes.repocard}>
                    <CardContent>
                      <Typography type="body1" className={classes.repotitle}>
                        a-little-diddy
                      </Typography>
                      <Typography component="p">About Jack and Diane</Typography>
                    </CardContent>
                    <CardActions />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  content: {
    marginTop: 30
  },
  flex: {
    flex: 1
  },
  userinfo: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80
  },
  repolist: {
    marginTop: 20
  },
  repo: {},
  repotitle: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  repocard: {},
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`
  },
  chip: {
    margin: `0 ${theme.spacing.unit * 2}px`
  },
  searchicon:{
    marginRight: 10
  },
  input: {
    color: 'white',
    paddingBottom: 0
  }
})

export default withStyles(styles)(App)
