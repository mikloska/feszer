const express = require("express")
const { galleryController } = require("../controllers/galleryController.js")

const router = express.Router()

router.route('/gallery').get(galleryController)

module.exports = router