const express = require("express")
const { getVideosController, updateVideoController } = require("../controllers/videosController.js")

const router = express.Router()

router.route('/videos').get(getVideosController)
router.route('/videos').put(updateVideoController)

module.exports = router