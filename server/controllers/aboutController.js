// const client = require("../config/db")
// const { getClient } = require("../config/pool")
const {executeQuery} = require("../config/executeQuery")

const getAboutController = async (req, res, next) => {
  try {
    const selectQuery = "SELECT * FROM about;"
    const queryResult = await executeQuery(selectQuery, next)
    res.json(queryResult.rows[0])
  } catch(error) {
    console.error(`Error: ${error.message}`)
    return next(new Error(`Error in about controller: ${error.message}`))
  }
}

module.exports =  { getAboutController }