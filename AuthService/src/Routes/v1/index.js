const express = require('express');
const Userconstroller = require('../../controllers/usercontroller')
const router = express.Router()
const {AuthRequestValidators} = require('../../middlewares/index')
router.post('/signup', 
    AuthRequestValidators.validateUserAuth, Userconstroller.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, Userconstroller.signin)
router.get('/isAuthenticated', Userconstroller.isAuthenticate);
module.exports = router