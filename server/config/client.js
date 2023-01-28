const pg = require('pg');

const client = async () => {
  try {
    const clientInit = new pg.Client(process.env.CONNECTION_URL);
    const connection = await clientInit.connect()
    return connection
  } catch(error) {
    return next(new Error(`Error connecting client: ${error.message}`))
  }

}

module.exports = client;