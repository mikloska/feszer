const {executeQuery} = require("../config/executeQuery")

const getAboutController = async (req, res) => {
  const selectQuery = "SELECT * FROM about;"
  const queryResult = await executeQuery(selectQuery, res)
  res.json(queryResult.rows[0])
}

const updateAboutController = async (req, res) => {
  const { language, updated } = req.body
  const putQuery = 
    `UPDATE about
      SET  ${language} = '${updated}'
      WHERE id = 1;
    `
  await executeQuery(putQuery, res)
  res.json("Successfully updated!")
}

module.exports =  { getAboutController, updateAboutController }