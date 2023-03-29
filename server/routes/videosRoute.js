const express = require("express")
const { getVideosController, updateVideosController } = require("../controllers/videosController.js")

const router = express.Router()

router.route('/videos').get(getVideosController)
router.route('/videos').put(updateVideosController)

module.exports = router