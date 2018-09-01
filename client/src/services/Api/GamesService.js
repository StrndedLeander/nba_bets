import Api from '@/services/Api/config'

export default {
  getStandings(path) {
    return Api().get('/standings', path)
  }
}
