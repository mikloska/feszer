const {executeQuery} = require("../config/executeQuery")
const { getFileStream } = require("../s3")

const galleryController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM gallery;"
  const result = await executeQuery(selectQuery, next)
  if(result) res.json(result.rows)
}

module.exports =  { galleryController }