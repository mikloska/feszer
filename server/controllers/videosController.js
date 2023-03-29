const {executeQuery} = require("../config/executeQuery")

const getVideosController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM videos;"
  const result = await executeQuery(selectQuery, next)
  if(result) {
    res.send(result.rows)
  }
}

const updateVideoController = async (req, res, next) => {
  const { updated } = req.body
  const putQuery = 
    `UPDATE video
      SET  url = '${updated.url}'
      WHERE id = ${updated.id};
    `
  const result = await executeQuery(putQuery, next)
  if(result) {
    res.send("Successfully updated!")
  }
}

module.exports =  { getVideosController, updateVideoController }