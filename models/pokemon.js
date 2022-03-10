const mongoose = require('mongoose')

const pokeSche = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: false},
})

const pokemon = mongoose.model('Pokemon', pokeSche)

module.exports = pokemon