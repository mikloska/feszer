const {executeQuery} = require("../config/executeQuery")

const galleryController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM gallery;"
  const result = await executeQuery(selectQuery, next)
  if(result) res.json(result.rows)
}

module.exports =  { galleryController }