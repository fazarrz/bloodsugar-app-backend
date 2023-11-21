const {body , validationResult} = require('express-validator');

const validateRegister = [

    body('email')
    .isEmail().withMessage('Email must be valid')
    .notEmpty().withMessage('Email cannot be empty'),

    body('password')
    .notEmpty().withMessage('Password cannot be empty')
    .isLength({min: 6}).withMessage('Password must be at least 6 characters long'),


    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

module.exports = {validateRegister};