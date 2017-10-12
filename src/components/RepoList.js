import React, { Component } from 'react'

export default class RepoList extends Component {
  constructor() {
    super()

    this.state = {
      repos: [
        {
          id: 65859375,
          name: 'advent-of-code',
          html_url: 'https://github.com/nllarson/advent-of-code',
          description: null,
          pushed_at: '2016-08-17T01:03:14Z',
          ssh_url: 'git@github.com:nllarson/advent-of-code.git',
          stargazers_count: 0,
          language: 'Java',
          forks: 0
        },
        {
          id: 75338547,
          name: 'advent_of_code_2016',
          html_url: 'https://github.com/nllarson/advent_of_code_2016',
          description: '2016 Advent of Code',
          pushed_at: '2016-12-08T16:10:13Z',
          stargazers_count: 0,
          language: 'Groovy',
          forks: 0
        },
        {
          id: 35244465,
          name: 'awesome-java',
          full_name: 'nllarson/awesome-java',
          html_url: 'https://github.com/nllarson/awesome-java',
          description: 'A curated list of awesome Java frameworks, libraries and software. Inspired by awesome-python.',
          pushed_at: '2015-05-07T20:24:00Z',
          stargazers_count: 0,
          language: null,
          forks: 0
        },
        {
          id: 48047948,
          name: 'beerfridge',
          html_url: 'https://github.com/nllarson/beerfridge',
          description: 'What is in stock?  What should we stock?',
          pushed_at: '2015-12-17T06:23:28Z',
          stargazers_count: 0,
          language: 'JavaScript',
          forks: 0
        },
        {
          id: 1087533,
          name: 'dotfiles',
          full_name: 'nllarson/dotfiles',
          html_url: 'https://github.com/nllarson/dotfiles',
          pushed_at: '2014-04-04T03:31:34Z',
          stargazers_count: 2,
          language: 'Shell',
          forks: 0
        }
      ]
    }
  }
  render() {
    return (
      <div>Repos</div>
      // <ul className="repoList">
      //     {repos.map(repo => {
      //         return <li>{repo.name}</li>
      //     })}
      // </ul>
    )
  }
}
