import mongoose from 'mongoose'

const aboutSchema= mongoose.Schema({
  English: {
  type: String,
  required: true
  },
  Magyar: {
    type: String,
    required: true
  },
}, {
  timestamps: true
}
)

const About= mongoose.model('About', aboutSchema)
export default About;