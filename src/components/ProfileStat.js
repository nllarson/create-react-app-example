import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

export default class ProfileStat extends Component {    
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
