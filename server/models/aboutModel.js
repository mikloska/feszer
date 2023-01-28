const mongoose = require('mongoose')

const aboutSchema= mongoose.Schema({
  English: String,
  // required: true
  
  Magyar: String
    // required: true
  
}, {
  collection: 'about'
})

const About= mongoose.model('About', aboutSchema)
module.exports =  About;