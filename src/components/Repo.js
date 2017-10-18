import React, { Component } from 'react'
import { ListItem, Card, CardHeader, CardContent, CardActions, Typography, Chip, Avatar } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Star, CallSplit } from 'material-ui-icons'
import moment from 'moment'

const StarAvatar = () => {
  return (
    <Avatar>
      <Star />
    </Avatar>
  )
}

const ForkAvatar = () => {
  return (
    <Avatar>
      <CallSplit />
    </Avatar>
  )
}

class Repo extends Component {
  render() {
    const { classes, repo } = this.props
    const timeUpdated = moment(repo.pushed_at).fromNow()
    return (
      <ListItem>
        <Card className={classes.repo}>
          <CardHeader title={repo.name} />
          <CardContent>
            <Typography>{repo.description}</Typography>
            <Typography type="caption" color="secondary">
              Last Update: {timeUpdated}
            </Typography>
          </CardContent>
          <CardActions>
            {repo.language && <Chip label={repo.language} />}
            <Chip avatar={<StarAvatar />} label={repo.stargazers_count} />
            <Chip avatar={<ForkAvatar />} label={repo.forks_count} />
          </CardActions>
        </Card>
      </ListItem>
    )
  }
}

const styles = theme => ({
  repo: {
    width: `100%`
  },
  lastUpdate: {
    flex: `1 1 auto`,
    marginRight: 20
  }
})

export default withStyles(styles)(Repo)
