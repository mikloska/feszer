const { getPool } = require("./pool")

const executeQuery = async (query, next) => {
  try {
    const pool = await getPool()
    const queryResult = await pool.query(query)
    return queryResult;
  } catch(error) {
    console.error(`Error: ${error.message}`)
    return next(new Error(`Error running query: ${error.message}`))
  }
}

module.exports =  { executeQuery }