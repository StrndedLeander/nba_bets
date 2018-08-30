import Api from '@/services/Api/config'

export default {
  getBets(path, credentials) {
    return Api().get(path, credentials)
  }
}
