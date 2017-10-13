import React, { Component } from 'react'
import { Avatar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'
import {fetchUserInformation} from '../utils/github-api'

class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }
  }

  getProfile = (username) => {
    fetchUserInformation(username).then(({user, orgs}) => {
      this.setState({user,orgs})
    })
  }

  componentWillMount() {
    this.getProfile(this.props.username)
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props
    return (
      <div>
        <div className={classes.user}>
          <Avatar src={user.avatar_url} className={classes.avatar} />
          <Typography type="headline" color="secondary">
            {user.name}
          </Typography>
          <Typography type="caption">{user.login}</Typography>
        </div>
        <div className={classes.stats}>
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </div>
        {orgs.length > 0 && <div className={classes.bottomborder}>
          <Typography type="caption" color="secondary">
            Organizations
          </Typography>
          <div className={classes.orgs}>{orgs.map(org => <Avatar key={org.id} src={org.avatar_url} />)}</div>
        </div>}
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
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    padding: theme.spacing.unit * 2    
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    borderBottom: '1px solid #eee',
    padding: theme.spacing.unit * 2
  },
  orgs: {
    paddingTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
})

export default withStyles(styles)(Profile)
