const {executeQuery} = require("../config/executeQuery")

const getVideosController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM videos;"
  const result = await executeQuery(selectQuery, next)
  if(result) {
    res.json(result.rows[0])
  }
}

const updateVideosController = async (req, res, next) => {
  const { updated } = req.body
  const putQuery = 
    `UPDATE video
      SET  url = '${updated.url}'
      WHERE id = ${updated.id};
    `
  const result = await executeQuery(putQuery, next)
  if(result) {
    res.json("Successfully updated!")
  }
}

module.exports =  { getVideosController, updateVideosController }