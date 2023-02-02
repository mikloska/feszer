const {executeQuery} = require("../config/executeQuery")

const getAboutController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM about;"
  const queryResult = await executeQuery(selectQuery, next)
  res.json(queryResult.rows[0])
}

const updateAboutController = async (req, res, next) => {
  const { language, updated } = req.body
  const putQuery = 
    `UPDATE about
      SET  ${language} = '${updated}'
      WHERE id = 1;
    `
  await executeQuery(putQuery, next)
  res.json("Successfully updated!")
}

module.exports =  { getAboutController, updateAboutController }