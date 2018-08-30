import Server from '@/services/Server'

export default {
  register(credentials) {
    return Server().post('register', credentials)
  },
  login(credentials) {
    return Server().post('login', credentials)
  }
}

