const express = require("express")
const getAboutController = require("../controllers/aboutController.js")

const router = express.Router()

router.route('/about').get(getAboutController)

module.exports = router