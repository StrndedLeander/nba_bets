import Server from '@/services/Server'

export default {
  getStandings(params) {
    return Server().get('Api/standings' + '/path=' + params)
  }
}
