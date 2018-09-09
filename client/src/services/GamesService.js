import Server from '@/services/Server'

export default {
  getSchedule(params) {
    return Server().get('Api/schedule' + '?path=' + params.path)
  }
}
