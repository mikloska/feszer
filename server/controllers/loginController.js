const {executeQuery} = require("../config/executeQuery")

const loginController = async (req, res, next) => {
  const { userName, password } = req.body
  const selectQuery = "SELECT user_name, password FROM login WHERE id=1;"
  const result = await executeQuery(selectQuery, next)
  if(result) res.json(result.rows)
}

module.exports =  { loginController }