import ApiUtils from './ApiUtils'

const BASE_URL = 'https://api.github.com'

const fetchRepos = username => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return fetch(url)
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
}

const fetchUserInfo = username => {
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

export { fetchRepos, fetchUserInfo }
