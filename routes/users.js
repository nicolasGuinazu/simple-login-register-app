var express = require('express');
var router = express.Router();
let userController=require('../controllers/userController')
let upload=require('../middlewares/multerMiddleware')


router.get('/login',userController.login);
router.post('/login',userController.processLogin);
router.get('/register',userController.register);
router.post('/register',upload.single('avatar'),userController.processRegister);
module.exports = router;
