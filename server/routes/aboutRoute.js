const express = require("express")
const { getAboutController, updateAboutController } = require("../controllers/aboutController.js")

const router = express.Router()

router.route('/about-band').get(getAboutController)
router.route('/about-band').put(updateAboutController)

module.exports = router