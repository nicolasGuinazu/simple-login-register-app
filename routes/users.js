var express = require('express');
var router = express.Router();
let userController=require('../controllers/userController')
let upload=require('../middlewares/multerMiddleware')
let guestMiddleware=require('../middlewares/guestMiddleware')
let authMiddleware=require('../middlewares/authMiddleware');
let validationsRegister=require('../middlewares/validationsRegister');

router.get('/login',guestMiddleware,userController.login);
router.post('/login',userController.processLogin);
router.get('/register',guestMiddleware,userController.register);
router.post('/register',upload.single('avatar'),validationsRegister,userController.processRegister);
router.get('/profile',authMiddleware,userController.profile);
router.get('/logout',userController.logout);
module.exports = router;
