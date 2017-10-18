import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { ListItem, Typography, Card, CardActions, CardHeader, CardContent, Chip, Avatar, IconButton } from 'material-ui'
import { CallSplit, Star, OpenInNew } from 'material-ui-icons'
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

    const title = (
      <span>
        {repo.name}
        <IconButton href={repo.html_url} target="_blank" aria-label="open">
          <OpenInNew />
        </IconButton>
      </span>
    )

    return (
      <ListItem>
        <Card className={classes.repo}>
          <CardHeader title={title} />
          <CardContent>
            <Typography component="p">{repo.description}</Typography>
          </CardContent>
          <CardActions>
            {repo.language ? <Chip label={repo.language} /> : ''}
            <Chip avatar={<StarAvatar />} label={repo.stargazers_count || 0} />
            <Chip avatar={<ForkAvatar />} label={repo.forks_count || 0} />
            <Typography className={classes.lastUpdate} type="caption" color="secondary" align="right">
              {timeUpdated}
            </Typography>
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
    flex: '1 1 auto',
    marginRight: 20
  },
  cardActions: {
    marginRight: 20
  }
})

export default withStyles(styles)(Repo)
