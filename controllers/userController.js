const Users=require('../models/Users')
const bcrypt=require('bcrypt')


const userController={
    login:(req,res)=>{
        res.render('login')
    },
    register:(req,res)=>{
        res.render('register')
    },
    processRegister:(req,res)=>{
        let userInDb=Users.findByField('email',req.body.email)

        if (userInDb){
            return res.send('Usuario ya registrado!!') //es con validaciones pero para testear
        }

        let newUser={
            ...req.body,
            password:bcrypt.hashSync(req.body.password,10),
            avatar:req.file.filename
        }

        Users.create(newUser)
        res.redirect('/')
    },
    processLogin:(req,res)=>{
        let userToLogIn=Users.findByField('email',req.body.email)
        let passOk=bcrypt.compareSync(req.body.password,userToLogIn.password)
        if (passOk){
            req.session.loggedUser=userToLogIn;
        }
        return res.redirect('/')
    },
    profile:(req,res)=>{

    return res.render('profile',{user:req.session.loggedUser}) 
      
    }
}
module.exports=userController