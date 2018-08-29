import Api from '@/services/Api'

export default {
  newBet(credentials) {
    return Api().post('bet', credentials)
  }
}
