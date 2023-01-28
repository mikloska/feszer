const client = require("./db")
const { getClient } = require("./pool")

const executeQuery = async (query, next) => {
  try {
    const client = await getClient()
    console.log('client: ', client)
    const queryResult = await client.query(query)
    return queryResult;
    // res.json(queryResult.rows[0])
  } catch(error) {
    console.error(`Error: ${error.message}`)
    return next(new Error(`Error running query: ${error.message}`))
  }
}

module.exports =  { executeQuery }