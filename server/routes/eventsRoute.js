const express = require("express")
const { getEventsController, updateEventController, deleteEventController } = require("../controllers/eventsController.js")

const router = express.Router()

router.route('/events').get(getEventsController)
router.route('/events').put(updateEventController)
router.route('/events').delete(deleteEventController)

module.exports = router