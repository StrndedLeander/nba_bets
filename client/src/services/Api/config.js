import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://api.mysportsfeeds.com/v2.0/pull/nba/'
  })
}