import express from 'express'

import getAboutController from '../controllers/aboutController.js'

const router = express.Router()

router.route('/about').get(getAboutController)

export default router