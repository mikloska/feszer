const { getClient } = require("./pool")

const executeQuery = async (query, next) => {
  try {
    const client = await getClient()
    const queryResult = await client.query(query)
    return queryResult;
  } catch(error) {
    console.error(`Error: ${error.message}`)
    return next(new Error(`Error running query: ${error.message}`))
  }
}

module.exports =  { executeQuery }