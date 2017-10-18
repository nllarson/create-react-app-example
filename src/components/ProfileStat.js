import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

export default class ProfileStat extends Component {
  static propTypes = {
    value: PropTypes.number,
    label: PropTypes.string
  }

  render() {
    const { value, label } = this.props
    return (
      <Grid item>
        <Typography type="headline">{value}</Typography>
        <Typography type="caption" component="small">
          {label}
        </Typography>
      </Grid>
    )
  }
}
