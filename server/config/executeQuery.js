const { getPool } = require("./pool")

const executeQuery = async (query, next) => {
  try {
    const pool = await getPool()
    const queryResult = await pool.query(query)
    if(queryResult){
      return queryResult;
    } else {
      return next(new Error(`Error running query: ${error.message}`))
    }
    
  } catch(error) {
    console.error(`Error executing query: ${error.message}`)
    return next(new Error(`Error running query: ${error.message}`))
  }
}

module.exports =  { executeQuery }