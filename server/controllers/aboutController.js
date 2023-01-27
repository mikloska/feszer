const About = require("../models/aboutModel.js")

const getAboutController = async(req, res, next) => {
  // res.send('It worked!')
  try{
    const about= await About.find({})
    if(about){
    //  res.locals.userProfile=({
     res.json({
      'about': about
     })
    }else{
      res.status(404)
      throw new Error('About not found')
    }
    next()
  }catch(error){
    console.error(`Error: ${error.message}`)
    return next(new Error(`Error in getProfile controller: ${error.message}`))
  }

}

module.exports =  getAboutController