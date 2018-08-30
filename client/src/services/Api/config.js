import axios from 'axios'

const API_KEY = "25c70071-e147-4cd5-bba6-455d09"
const authToken = API_KEY + ":" + MYSPORTSFEEDS

export default () => {
  return axios.create({
    baseURL: 'https://api.mysportsfeeds.com/v2.0/pull/nba/',
    headers: {
      Authorization: Basic, authToken
    }
  })
}
