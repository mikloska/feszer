const {executeQuery} = require("../config/executeQuery")

const getEventsController = async (req, res) => {
  const selectQuery = "SELECT * FROM events;"
  const queryResult = await executeQuery(selectQuery, res)
  res.json(queryResult.rows[0])
}

const updateEventController = async (req, res) => {
  const { id, updated } = req.body
  const putQuery = 
    `UPDATE event
      SET  event_name = '${updated.eventName}', location = '${updated.location}', address = '${updated.address}', date_and_time = '${updated.dateAndTime}', flyer = '${updated.flyer}'
      WHERE id = ${id};
    `
  await executeQuery(putQuery, res)
  res.json("Successfully updated!")
}

const deleteEventController = async (req, res) => {
  const { id } = req.body
  const putQuery = 
    `DELETE FROM events
     WHERE id = ${id};
    `
  await executeQuery(putQuery, res)
  res.json("Successfully updated!")
}

module.exports =  { getEventsController, updateEventController, deleteEventController }