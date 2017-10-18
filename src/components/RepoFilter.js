import React, { Component } from 'react'
import { TextField } from 'material-ui'

export default class RepoFilter extends Component {
  render() {
    const { onUpdate } = this.props
    return (
      <TextField
        id="repo-filter"
        placeholder="Filter repositories..."
        fullWidth
        margin="normal"
        onChange={({ target: { value } }) => onUpdate(value)}
      />
    )
  }
}
