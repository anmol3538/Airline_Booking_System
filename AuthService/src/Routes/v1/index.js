const express = require('express');
const Userconstroller = require('../../controllers/usercontroller')
const router = express.Router()

router.post('/signup', Userconstroller.create);

module.exports = router