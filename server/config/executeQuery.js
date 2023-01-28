const connectDB = require("./client")

const executeQuery = async (sql, binding) => {
  const connection = connectDB.connect();
  try {
    const results = await connection.query(sql, binding);
    return results;
  } catch (error) {
    return next(new Error(`Error executing query: ${error.message}`))
  }
}

module.exports = executeQuery;