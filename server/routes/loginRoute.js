const express = require("express")
const { loginController } = require("../controllers/loginController.js")

const router = express.Router()

router.route('/login').post(loginController)

module.exports = router