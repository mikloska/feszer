const {executeQuery} = require("../config/executeQuery")

const getAboutController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM about;"
  const result = await executeQuery(selectQuery, next)
  if(result) {
    res.send(result.rows[0])
  }
}

const updateAboutController = async (req, res, next) => {
  const { language, updated } = req.body
  const putQuery = 
    `UPDATE about
      SET  ${language} = '${updated}'
      WHERE id = 1;
    `
  const result = await executeQuery(putQuery, next)
  if(result) {
    res.send("Successfully updated!")
  }
}

module.exports =  { getAboutController, updateAboutController }