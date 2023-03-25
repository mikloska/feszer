const bcrypt = require('bcrypt')

const {executeQuery} = require("../config/executeQuery")

const loginController = async (req, res, next) => {
  const { userName, password } = req.body
  const selectQuery = "SELECT user_name, password FROM login WHERE id=1;"
  const result = await executeQuery(selectQuery, next)
  const compare = await bcrypt.compare(password, result.rows[0].password)

  if(
    result && 
    result.rows[0].user_name === userName && 
    compare
  ) {
    res.json('successfully logged in !')
  } else {
    return next(`Incorrect username or password`)
  }
}

module.exports =  { loginController }