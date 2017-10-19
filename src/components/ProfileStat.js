import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from 'material-ui'

export default class ProfileStat extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }
  render() {
    const { label, value } = this.props
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
