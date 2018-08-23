module.exports = {
  port: 8081,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
