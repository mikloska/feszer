const express = require("express")
const { getAboutMembersController, updateAboutMemberController } = require("../controllers/aboutMembersController.js")

const router = express.Router()

router.route('/about-members').get(getAboutMembersController)
router.route('/about-members').put(updateAboutMemberController)

module.exports = router