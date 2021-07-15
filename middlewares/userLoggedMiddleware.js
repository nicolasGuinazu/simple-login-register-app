const Users=require('../models/Users')

const userLogedMiddleware=(req,res,next)=>{
    res.locals.isLogged=false

    let emailInCookie=req.cookies.userEmail
    let userFromCookie=Users.findByField('email',emailInCookie)

    if(emailInCookie && userFromCookie){
        req.session.loggedUser=userFromCookie;
    }

    if(req.session.loggedUser){
        res.locals.isLogged=true;
        res.locals.userLogged=req.session.loggedUser
    }
    
    next();
}

module.exports=userLogedMiddleware