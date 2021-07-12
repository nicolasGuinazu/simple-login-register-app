const Users=require('../models/Users')
const userController={
    login:(req,res)=>{
        res.render('login')
    },
    register:(req,res)=>{
        res.render('register')
    },
    processRegister:(req,res)=>{
        Users.create(req.body)
        res.send('ok')
    },
    processLogin:(req,res)=>{

    },
}
module.exports=userController