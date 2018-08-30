import Api from '@/services/Api/config'

export default {
  getBets(path) {
    return Api().get(Api.baseURL + path)
  }
}
