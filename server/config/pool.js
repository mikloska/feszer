const { Pool } = require('pg')
const pg = require('pg');
const password = process.env.PASSWORD
const userDatabase = process.env.USER_DATABASE
const host = process.env.HOST

const credentials = {
  user: userDatabase,
  host: host,
  database: userDatabase,
  password: password,
  port: 5432,
}

let mainPool = null;
let mainClient = null;

const createPool = () => {
  // const pool = new Pool(credentials);
  const pool = new pg.Client(process.env.CONNECTION_URL);
  pool.connect();
  return pool;
}

const getPool = () => {
  if(!mainPool){
    mainPool = createPool();
  }
  return mainPool;
}

const createClient = async () => {
  // const pool = new Pool(credentials);
  try {
    const client = new pg.Client(process.env.CONNECTION_URL);
    await client.connect();
    return client;
  } catch {
    return next(new Error(`Error connecting client: ${error.message}`))
  }

}

const getClient = () => {
  if(!mainClient){
    mainClient = createClient();
  }
  return mainClient;
}

module.exports = { getPool, createPool, createClient, getClient };