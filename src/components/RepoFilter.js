import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'

export default class RepoFilter extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired
  }

  render() {
    return (
        <TextField
        id="repo-filter"
        placeholder="Filter repositories..."
        fullWidth
        margin="normal"
        onChange={({target: {value}}) => this.props.onUpdate(value)}
      />
    )
  }
}
