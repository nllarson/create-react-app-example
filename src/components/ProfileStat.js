import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

export default class ProfileStat extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string
    })
  }

  render() {
    const { value, label } = this.props
    return (
      <span>
        <Typography type="headline">{value}</Typography>
        <Typography type="caption" component="small">
          {label}
        </Typography>
      </span>
    )
  }
}
