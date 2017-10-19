# create-react-app-example

- [ ] What is react
- [ ] Website
- [ ] create-react-app (huh???)
- [ ] GitHub - https://developer.github.com/v3/
- [ ] Material-UI / React Router (react libaries, gives us components to reuse)
- [ ] layout picture
- [ ] demo time!


## Application Setup

```shell
create-react-app repoBrowser
cd repoBrowser
yarn start
```

- [ ] Demo live reload / etc, explain everything that CRA does so you don’t have to!

```shell
yarn add material-ui@next
yarn add material-ui-icons@next
yarn add react-router
yarn add react-router-dom
cp ~/Desktop/nwmsu/utils/* .
```

<div style="page-break-after: always;"></div>

## Add Routing
- [ ] index.js changes
- [ ] Show that react-create-app stil shows up, but notice url
- [ ] discuss the new urls, touch briefly that we will use this later

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

const theme = createMuiTheme()

const repoFinder = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/user/:username" component={App} />
          <Redirect from="/" to="/user/nllarson" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

ReactDOM.render(repoFinder(), document.getElementById('root'))
```

<div style="page-break-after: always;"></div>

## Build Our App
- [ ] Create Placeholder files for `Profile.js`, `RepoList.js`, and `RepoFilter.js`
- [ ] App.js

```javascript
import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import RepoFilter from './components/RepoFilter'

export default class App extends Component {

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={9}>
          <RepoFilter />
          <RepoList />
        </Grid>
      </Grid>
    )
  }
}
```
<div style="page-break-after: always;"></div>

## Build Profile Component(s)
#### Profile - Step 1:
- [ ] Add `user` and `orgs` to state
- [ ] Create Grid for profile
- [ ] Introduce styling
- [ ] Bring in dummy data from `profile.json`, explain this data mimic GitHub api payload.


```javascript
class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props
    return (
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        spacing={0}
      >
        <Grid item>
          <Avatar src={user.avatar_url} className={classes.avatar}/>
        </Grid>
        <Grid item>
          <Typography type="headline" color="secondary">
            {user.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography type="caption">{user.login}</Typography>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  avatar: {
    width: 200,
    height: 200
  }
})

export default withStyles(styles)(Profile)
```

<div style="page-break-after: always;"></div>

#### Profile - Step 2:
- [ ] Add basic profile stats
- [ ] Explain a bit more about Grid / flexbox styling.
- [ ] Perhaps draw grids on board to explain.

```javascript
import React, { Component } from 'react'
import { Grid, Avatar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'
import { fetchUserInformation } from '../utils/github-api'

class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props

    return (
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            align="center"
            justify="center"
            spacing={0}
          >
            <Grid item>
              <Avatar src={user.avatar_url} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography type="headline" color="secondary">
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="caption">{user.login}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" align="center">
            <Grid item>
              <Typography type="headline">{user.followers}</Typography>
              <Typography type="caption" component="small">
                followers
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="headline">{user.public_repos}</Typography>
              <Typography type="caption" component="small">
                repositories
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="headline">{user.following}</Typography>
              <Typography type="caption" component="small">
                following
              </Typography>
            </Grid>                        
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  avatar: {
    width: 200,
    height: 200
  }
})

export default withStyles(styles)(Profile)
```
<div style="page-break-after: always;"></div>

#### Profile - Step 3:
- [ ] Add Organization(s)
- [ ] Finish Styling (bottomBorder) 

```javascript
import React, { Component } from 'react'
import { Grid, Avatar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'
import { fetchUserInformation } from '../utils/github-api'

class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props

    return (
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            align="center"
            justify="center"
            spacing={0}
            className={classes.bottomBorder}
          >
            <Grid item>
              <Avatar src={user.avatar_url} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography type="headline" color="secondary">
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="caption">{user.login}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" align="center" className={classes.bottomBorder}>
            <Grid item>
              <Typography type="headline">{user.followers}</Typography>
              <Typography type="caption" component="small">
                followers
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="headline">{user.public_repos}</Typography>
              <Typography type="caption" component="small">
                repositories
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="headline">{user.following}</Typography>
              <Typography type="caption" component="small">
                following
              </Typography>
            </Grid>    
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" className={classes.bottomBorder}>
            {orgs.map(org => {
              return (
                <Grid item key={org.id}>
                  <Avatar src={org.avatar_url} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  bottomBorder: {
    borderBottom: '1px solid #eee',
    paddingTop: theme.spacing.unit
  },
  avatar: {
    width: 200,
    height: 200
  }
})

export default withStyles(styles)(Profile)
```
<div style="page-break-after: always;"></div>

## More Components!!! (Code Reuse)
- [ ] Add ProfileStat.js  
- [ ] Explain benefits of doing this (code reuse, mass changes, testing)
- [ ] Convert `followers`, `repositories`, `following` to `<ProfileStat/>` in Profile.js

```javascript
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
```

```javascript
<ProfileStat value={user.followers} label="followers" />
<ProfileStat value={user.public_repos} label="repositories" />
<ProfileStat value={user.following} label="following" />
```
<div style="page-break-after: always;"></div>

## Build RepoList Component(s)
#### RepoList - Step 1:

- [ ] Add `repos` to RepoList state
- [ ] Add dummy data from `repolist.json` to get some visualization
- [ ] Create a simple `Repo.js`
- [ ] Sort repos by date (compareFunction returns -1, 0, 1 to determine order)
- [ ] Map - loops over repos, returning a new element for each one.  converts array to `<Repo....>` for each.


_RepoList.js_
```javascript
import React, { Component } from 'react'
import { List } from 'material-ui'
import Repo from './Repo'

export default class RepoList extends Component {
  constructor(args) {
    super(args)

    this.state = {
      repos: []
    }
  }

  render() {
    const { repos } = this.state
    return (
      <List>
        {repos
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
```

_Repo.js_
```javascript
import React, { Component } from 'react'

export default class Repo extends Component {
  render() {
    const { repo } = this.props
    return (
      <div>
        {repo.name} - {repo.pushed_at}
      </div>
    )
  }
}
```
<div style="page-break-after: always;"></div>

#### RepoList - Step 2:
- [ ] Complete Repo.js
- [ ] inline funcitons as components
- [ ] install moment to put a better readable message

```javascript
import React, { Component } from 'react'
import { ListItem, Card, CardHeader, CardContent, CardActions, Typography, Chip, Avatar } from 'material-ui'
import { Star, CallSplit } from 'material-ui-icons'
import moment from 'moment'

const StarAvatar = () => {
  return (
    <Avatar>
      <Star />
    </Avatar>
  )
}

const ForkAvatar = () => {
  return (
    <Avatar>
      <CallSplit />
    </Avatar>
  )
}

export default class Repo extends Component {
  render() {
    const { repo } = this.props
    const timeUpdated = moment(repo.pushed_at).fromNow()
    return (
      <ListItem>
        <Card>
          <CardHeader title={repo.name} />
          <CardContent>
            <Typography>{repo.description}</Typography>
            <Typography type="caption" color="secondary">
              Last Update: {timeUpdated}
            </Typography>
          </CardContent>
          <CardActions>
            <Chip label={repo.language} />
            <Chip avatar={<StarAvatar />} label={repo.stargazers_count} />
            <Chip avatar={<ForkAvatar />} label={repo.forks_count} />
          </CardActions>
        </Card>
      </ListItem>
    )
  }
}
```
<div style="page-break-after: always;"></div>

### RepoList - Step 3:
- [ ] Hide language if not present
- [ ] style Repo

```javascript
import React, { Component } from 'react'
import { ListItem, Card, CardHeader, CardContent, CardActions, Typography, Chip, Avatar } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Star, CallSplit } from 'material-ui-icons'
import moment from 'moment'

const StarAvatar = () => {
  return (
    <Avatar>
      <Star />
    </Avatar>
  )
}

const ForkAvatar = () => {
  return (
    <Avatar>
      <CallSplit />
    </Avatar>
  )
}

class Repo extends Component {
  render() {
    const { classes, repo } = this.props
    const timeUpdated = moment(repo.pushed_at).fromNow()
    return (
      <ListItem>
        <Card className={classes.repo}>
          <CardHeader title={repo.name} />
          <CardContent>
            <Typography>{repo.description}</Typography>
            <Typography type="caption" color="secondary">
              Last Update: {timeUpdated}
            </Typography>
          </CardContent>
          <CardActions>
            {repo.language && <Chip label={repo.language} />}
            <Chip avatar={<StarAvatar />} label={repo.stargazers_count} />
            <Chip avatar={<ForkAvatar />} label={repo.forks_count} />
          </CardActions>
        </Card>
      </ListItem>
    )
  }
}

const styles = theme => ({
  repo: {
    width: `100%`
  }
})

export default withStyles(styles)(Repo)
```
<div style="page-break-after: always;"></div>

### RepoList - Step 4:
- [ ] Fill out RepoFilter.js

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'

export default class RepoFilter extends Component {
  static propTypes = {}

  render() {
    return (
      <TextField
        id="repo-filter"
        placeholder="Filter repositories..."
        fullWidth
      />
    )
  }
}
```
<div style="page-break-after: always;"></div>

### RepoList - Step 5:
- [ ] Add filter to App state
- [ ] Add filter update handler to App
- [ ] Update RepoFilter to use handler (use console logger to show state updates)
- [ ] Pass filter to repo list as prop
- [ ] Update RepoList sort / map to add a filter first (filter by name and description)
- [ ] Explain that the props of these functions are changing as we type into the filter (`.setState(...)` is happening).  This causes React to reconsile te DOM and show the changes!  WOW!!!!!

_App.js_
```javascript
export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = { filter: '' }
  }

  handleFilterUpdate = filter => {
    this.setState({ filter })
  }

  render() {
    const { filter } = this.state
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={9}>
          <RepoFilter onUpdate={this.handleFilterUpdate} />
          <RepoList filter={filter} />
        </Grid>
      </Grid>
    )
  }
}
```

_RepoFilter.js_
```javascript
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
```

_RepoList.js_
```javascript
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
```
<div style="page-break-after: always;"></div>

## Hook into GitHub API
### API - Step 1:
- [ ] Now...let's bring this thing to life!!!!
- [ ] ApiUtils.js and github-api.js

_ApiUtils.js_
```javascript
const ApiUtils = {  
    checkStatus: function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }

  export default ApiUtils
```

_github-api.js_
```javascript
import ApiUtils from './ApiUtils'

const BASE_URL = 'https://api.github.com'

const fetchRepos = username => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return fetch(url)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
}

const fetchUser = username => {
  const url = `${BASE_URL}/users/${username}`
  return fetch(url)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
}

const fetchOrgs = username => {
  const url = `${BASE_URL}/users/${username}/orgs`
  return fetch(url)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
}

const fetchUserInformation = username => {
  return Promise.all([fetchUser(username), fetchOrgs(username)]).then(([user, orgs]) => {
    return { user, orgs }
  })
}

export { fetchRepos, fetchUser, fetchOrgs, fetchUserInformation }
```
<div style="page-break-after: always;"></div>

### API - Step 2:
- [ ] Remember earlier when talking about Router and URL, let's use that as the key to search for the proper GH repo
- [ ] Grab `username` in `App.js` and send it along to `<Profile/>` and `<RepoList/>`
- [ ] Clean state in `Profile.js` and `RepoList.js` and add the `componentWillMount()`  (`cwm`)

_App.js_
```javascript
import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import RepoFilter from './components/RepoFilter'

class App extends Component {
  constructor(args) {
    super(args)
    this.state = { filter: '' }
  }

  handleFilterUpdate = filter => {
    this.setState({ filter })
  }

  render() {
    const { filter } = this.state
    const username = this.props.match.params.username
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Profile username={username} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <RepoFilter onUpdate={this.handleFilterUpdate} />
          <RepoList username={username} filter={filter} />
        </Grid>
      </Grid>
    )
  }
}

export default App

```

_Profile.js_
```javascript
import React, { Component } from 'react'
import { Grid, Avatar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import ProfileStat from './ProfileStat'
import { fetchUserInformation } from '../utils/github-api'

class Profile extends Component {
  constructor(args) {
    super(args)

    this.state = {
      user: {},
      orgs: []
    }
  }

  getUserData = username => {
    fetchUserInformation(username).then(({ user, orgs }) => {
      this.setState({ user, orgs })
    })
  }

  componentWillMount() {
    this.getUserData(this.props.username)
  }

  render() {
    const { user, orgs } = this.state
    const { classes } = this.props

    return (
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            align="center"
            justify="center"
            spacing={0}
            className={classes.bottomBorder}
          >
            <Grid item>
              <Avatar src={user.avatar_url} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography type="headline" color="secondary">
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography type="caption">{user.login}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" align="center" className={classes.bottomBorder}>
            <ProfileStat label="followers" value={user.followers} />
            <ProfileStat label="repositories" value={user.public_repos} />
            <ProfileStat label="following" value={user.following} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" className={classes.bottomBorder}>
            {orgs.map(org => {
              return (
                <Grid item key={org.id}>
                  <Avatar src={org.avatar_url} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  bottomBorder: {
    borderBottom: '1px solid #eee',
    paddingTop: theme.spacing.unit
  },
  avatar: {
    width: 200,
    height: 200
  }
})

export default withStyles(styles)(Profile)
```

_RepoList.js_
```javascript
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
```




          