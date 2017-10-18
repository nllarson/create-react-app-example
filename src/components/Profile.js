import React, { Component } from 'react'
import { Avatar, Typography } from 'material-ui'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'
import { fetchUserInformation } from '../utils/github-api'

class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }

  }

  getProfile = username => {
    fetchUserInformation(username).then(({ user, orgs }) => {
      this.setState({ user, orgs })
    })
  }

  componentWillMount() {
    this.getProfile(this.props.username)
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props
    return (
      <Grid container spacing={0} direction="column">
        <Grid item>
          <Grid
            container
            className={classes.bottomborder}
            direction="column"
            align="center"
            justify="center"
            spacing={0}
          >
            <Grid item>
              <Avatar src={user.avatar_url} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography type="headline" color="secondary">
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="caption">{user.login}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.bottomborder} justify="space-between" align="center">
            <ProfileStat value={user.followers} label="followers" />
            <ProfileStat value={user.public_repos} label="repositories" />
            <ProfileStat value={user.following} label="following" />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.bottomborder} justify="center" align="center">
            {orgs.map(org => (
              <Grid item key={org.id}>
                <Avatar src={org.avatar_url} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  bottomborder: {
    textAlign: 'center',
    borderBottom: '1px solid #eee',
    paddingTop: theme.spacing.unit * 2
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
})

export default withStyles(styles)(Profile)
