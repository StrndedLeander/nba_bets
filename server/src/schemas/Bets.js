const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BetSchema = new Schema({
  gameID: {
    type: String
  },
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  game_time: {
    type: Date,
    required: true
  },
  result: {
    type: Number,
    min: 1,
    max: 2
  }
})

module.exports = mongoose.model('Bet', BetSchema)
