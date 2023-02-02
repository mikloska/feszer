const {executeQuery} = require("../config/executeQuery")

const getEventsController = async (req, res, next) => {
  const selectQuery = "SELECT * FROM events;"
  const result = await executeQuery(selectQuery, next)
  if(result) res.json(queryResult.rows[0])
}

const addEventController = async (req, res, next) => {
  const { eventName, venue, address, dateAndTime, flyer, schedule, video } = req.body
  const putQuery = 
    `INSERT INTO events(event_name, venue, address, date_and_time, flyer, schedule, video)
      VALUES('${eventName}','${venue}','${address}','${dateAndTime}','${flyer}','${schedule}','${video}');
    `
  const result = await executeQuery(putQuery, next)
  if(result) res.json("Successfully added!")
}

const updateEventController = async (req, res, next) => {
  const { id, updated } = req.body
  const { eventName, venue, address, dateAndTime, flyer, schedule, video } = updated
  const putQuery = 
    `UPDATE events
      SET event_name = '${eventName}', venue = '${venue}', address = '${address}', date_and_time = '${dateAndTime}',
      flyer = '${flyer}', schedule = '${schedule}', video = '${video}'
      WHERE id = ${id};
    `
  const result = await executeQuery(putQuery, next)
  if(result) res.json("Successfully updated!")
}

const deleteEventController = async (req, res, next) => {
  const { id } = req.body
  const putQuery = 
    `DELETE FROM events
     WHERE id = ${id};
    `
  const result = await executeQuery(putQuery, next)
  if(result) res.json("Successfully deleted!")
}

module.exports =  { getEventsController, addEventController, updateEventController, deleteEventController }