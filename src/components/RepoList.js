import React, { Component } from 'react'
import { List } from 'material-ui'
import Repo from './Repo'
import { fetchRepos } from '../utils/github-api'

export default class RepoList extends Component {
  constructor(args) {
    super(args)

    this.state = {
      repos: []
    }
  }

  getRepos = username => {
    fetchRepos(username).then(repos => {
      this.setState({ repos })
    })
  }

  componentWillMount() {
    this.getRepos(this.props.username)
  }

  render() {
    const { repos } = this.state
    const { filter } = this.props
    return (
      <List>
        {repos
          .filter(repo => {
            return (
              (repo.name && repo.name.toLowerCase().includes(filter.toLowerCase())) ||
              (repo.description && repo.description.toLowerCase().includes(filter.toLowerCase()))
            )
          })
          .sort((a, b) => {
            return Date.parse(b.pushed_at) - Date.parse(a.pushed_at)
          })
          .map(repo => {
            return <Repo key={repo.id} repo={repo} />
          })}
      </List>
    )
  }
}
