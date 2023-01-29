const express = require("express")
const { getAboutMembersController } = require("../controllers/aboutMembersController.js")

const router = express.Router()

router.route('/about-members').get(getAboutMembersController)

module.exports = router