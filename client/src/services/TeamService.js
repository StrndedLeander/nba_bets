import Server from '@/services/Server'

export default {
  getStandings(params) {
    return Server().get('Api/standings' + '?path=' + params.path)
  },
  getTeams(params){
    return Server().get('Api/teams' + '?path=' + params.path)
  }
}