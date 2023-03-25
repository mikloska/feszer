const express = require("express")
const { loginController } = require("../controllers/loginController.js")

const router = express.Router()

router.route('/login').put(loginController)

module.exports = router