const notFound = (req,res,next)=>{
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  return next(error)
}

const errorHandler = (err, req, res, next)=>{
const statusCode = res.statusCode===200 ? 500:res.statusCode
return res.status(statusCode).json({ 
  message: err,
  //If in development see stack
  stack: process.env.NODE_ENV === 'production' ? null: err.stack,
})
// return res
}

module.exports =  { notFound, errorHandler }