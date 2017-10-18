import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'

export default class RepoFilter extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired
  }

  render() {
    const { onUpdate } = this.props
    return (
      <TextField
        id="repo-filter"
        placeholder="Filter repositories..."
        fullWidth
        onChange={({ target: { value } }) => onUpdate(value)}
      />
    )
  }
}
