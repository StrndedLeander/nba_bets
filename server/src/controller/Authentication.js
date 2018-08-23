const User = require('../schemas/User')
const config = require('../config/config')
const mongoose = require('mongoose')
const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
mongoose.Promise = Promise

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    let userInfo = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }
    var user = new User({
      email: userInfo.email,
      username: userInfo.name,
      password: userInfo.password
    })
    user.save().then((user, err) => {
      if (err) {
        console.log(err)
        return res.status(400).send({
          error: 'Could not create new user!'
        })
      }
      res.send({
        user: user
      })
    })
  },

  // Logs one in by sending the user - still needs: password hashing, token
  async login (req, res) {
    // get request info
    const {
      email,
      password
    } = req.body

    // try to find user by email
    User.findOne({
      email: email
    }, (err, user) => {
      // return an error if user was not found
      if (err) {
        return res.status(400).send({
          error: 'No user with this E-Mail!'
        })
      }
      // User was found so compare hashedpassword and send a token
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return res.status(403).send({
            error: 'Password not correct!'
          })
        }
        // Send back the user with web token
        return res.send({
          user: user,
          token: jwtSignUser(user.toJSON())
        })
      })
    })
  }
}
