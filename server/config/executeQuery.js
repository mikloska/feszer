const { getPool } = require("./pool")

const executeQuery = async (query, res) => {
  try {
    const pool = await getPool()
    const queryResult = await pool.query(query)
    return queryResult;
  } catch(error) {
    res.status(500).send(`Error executing query: ${error.message}`)
    // throw new Error(`Error executing query: ${error.message}`)
  }
}

module.exports =  { executeQuery }