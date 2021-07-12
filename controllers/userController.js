const Users=require('../models/Users')
const db=require('../database/users.json')
const userController={
    login:(req,res)=>{
        res.render('login')
    },
    register:(req,res)=>{
        res.send(db)
        /* Users.create(req.body)
        res.render('register')
        return res.send('todo ok' + req.body) */
    },
}
module.exports=userController