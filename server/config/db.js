const { createPool } = require("./pool")

const connectDB = async () =>{
  try{
    await createPool()
    console.log('Database is now connected')
  } catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = { connectDB }
