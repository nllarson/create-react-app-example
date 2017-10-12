import React, { Component } from 'react'
import { Avatar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'

class Profile extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        login: 'nllarson',
        id: 208498,
        avatar_url: 'https://avatars1.githubusercontent.com/u/208498?v=4',
        html_url: 'https://github.com/nllarson',
        name: 'Nick Larson',
        company: '@objectpartners',
        location: 'Omaha, NE ',
        public_repos: 13,
        followers: 16,
        following: 9
      },

      orgs: [
        {
          login: 'objectpartners',
          id: 1569148,
          avatar_url: 'https://avatars1.githubusercontent.com/u/1569148?v=4'
        },
        {
          login: 'OJUG',
          id: 7458223,
          avatar_url: 'https://avatars2.githubusercontent.com/u/7458223?v=4'
        }
      ]
    }
  }
  render() {
    const { user, orgs } = this.state
    const { classes } = this.props
    return (
      <div>
        <div className={`${classes.user} + ' ' + ${classes.bottomborder}`}>
          <Avatar src={user.avatar_url} className={classes.avatar} />
          <Typography type="headline" color="secondary">
            {user.name}
          </Typography>
          <Typography type="caption">{user.login}</Typography>
        </div>
        <div className={`${classes.stats} + ' ' + ${classes.bottomborder}`}>
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </div>
        <div className={classes.bottomborder}>
          <Typography type="caption" color="secondary">
            Organizations
          </Typography>
          <div className={classes.orgs}>
            {orgs.map(org => <Avatar src={org.avatar_url} />)}
          </div>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  bottomborder: {
    textAlign: 'center',
    borderBottom: '1px solid #eee',
    padding: theme.spacing.unit * 2
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  orgs: {
    paddingTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
})

export default withStyles(styles)(Profile)
