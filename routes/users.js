var express = require('express');
var router = express.Router();
let userController=require('../controllers/userController')
let upload=require('../middlewares/multerMiddleware')
let guestMiddleware=require('../middlewares/guestMiddleware')
let authMiddleware=require('../middlewares/authMiddleware');

router.get('/login',guestMiddleware,userController.login);
router.post('/login',userController.processLogin);
router.get('/register',guestMiddleware,userController.register);
router.post('/register',upload.single('avatar'),userController.processRegister);
router.get('/profile',authMiddleware,userController.profile);
module.exports = router;
