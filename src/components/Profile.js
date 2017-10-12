import React, { Component } from 'react'

export default class Profile extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        login: 'nllarson',
        id: 208498,
        avatar_url: 'https://avatars1.githubusercontent.com/u/208498?v=4',
        html_url: 'https://github.com/nllarson',
        location: 'Omaha, NE ',
        public_repos: 13,
        public_gists: 0,
        followers: 16,
        following: 9
      },

      orgs: [
        {
          login: 'objectpartners',
          id: 1569148,
          avatar_url: 'https://avatars1.githubusercontent.com/u/1569148?v=4'
        },
        {
          login: 'OJUG',
          id: 7458223,
          avatar_url: 'https://avatars2.githubusercontent.com/u/7458223?v=4'
        }
      ]
    }
  }
  render() {
    return <div>User</div>
  }
}
