const {check}=require('express-validator')

module.exports=[
    check('name').notEmpty().withMessage('Debes escribir un nombre valido'),
    check('email').notEmpty().withMessage('Debes escribir un email valido'),
    check('password').notEmpty().withMessage('Debes crear una contrasena')

]

