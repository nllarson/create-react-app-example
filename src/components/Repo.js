import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  ListItem,
  Typography,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Chip,
  Avatar,
  IconButton
} from 'material-ui'
import { CallSplit, Star, OpenInNew } from 'material-ui-icons'
import moment from 'moment'

class Repo extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      html_url: PropTypes.string,
      language: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      pushed_at: PropTypes.string
    })
  }

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
          <CardActions className={classes.cardActions}>
            {repo.language ? <Chip label={repo.language} /> : ''}
            <Chip
              avatar={
                <Avatar>
                  <Star />
                </Avatar>
              }
              label={repo.stargazers_count}
            />
            <Chip
              avatar={
                <Avatar>
                  <CallSplit />
                </Avatar>
              }
              label={repo.forks_count || 0}
            />
            <Typography className={classes.flexGrow} type="caption" color="secondary" align="right">
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
  groovy: {
    backgroundColor: 'orange'
  },
  javascript: {
    backgroundColor: 'yellow'
  },
  shell: {
    backgroundColor: 'green'
  },
  flexGrow: {
    flex: '1 1 auto'
  },
  cardActions: {
    marginRight: 20
  },
  repoLink: {}
})

export default withStyles(styles)(Repo)
