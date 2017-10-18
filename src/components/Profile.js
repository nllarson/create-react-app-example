import React, { Component } from 'react'
import { Grid, Avatar, Typography } from 'material-ui'
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

  getUserData = username => {
    fetchUserInformation(username).then(({ user, orgs }) => {
      this.setState({ user, orgs })
    })
  }

  componentWillMount() {
    this.getUserData(this.props.username)
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props

    return (
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            align="center"
            justify="center"
            spacing={0}
            className={classes.bottomBorder}
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
          <Grid container justify="space-between" align="center" className={classes.bottomBorder}>
            <ProfileStat label="followers" value={user.followers} />
            <ProfileStat label="repositories" value={user.public_repos} />
            <ProfileStat label="following" value={user.following} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" className={classes.bottomBorder}>
            {orgs.map(org => {
              return (
                <Grid item key={org.id}>
                  <Avatar src={org.avatar_url} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  bottomBorder: {
    borderBottom: '1px solid #eee',
    paddingTop: theme.spacing.unit
  },
  avatar: {
    width: 200,
    height: 200
  }
})

export default withStyles(styles)(Profile)
