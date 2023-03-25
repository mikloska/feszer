const {executeQuery} = require("../config/executeQuery")

const loginController = async (req, res, next) => {
  console.log(req.body)
  const { userName, password } = req.body
  const selectQuery = "SELECT user_name, password FROM login WHERE id=1;"
  const result = await executeQuery(selectQuery, next)
  if(
    result && 
    result.rows[0].user_name === userName && 
    result.rows[0].password === password
  ) {
    res.json('successfully logged in !')
  } else {
    return next(`Incorrect username or password`)
  }
}

module.exports =  { loginController }