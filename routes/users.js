var express = require('express');
var router = express.Router();
let userController=require('../controllers/userController')

router.get('/login',userController.login);
router.post('/login',userController.processLogin);
router.get('/register',userController.register);
router.post('/register',userController.processRegister);
module.exports = router;
