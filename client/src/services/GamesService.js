import Server from '@/services/Server'

export default {
  getStandings(path) {
    return Server().get('Api/standings', path)
  }
}
