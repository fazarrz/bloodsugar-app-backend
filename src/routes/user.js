const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userHandler = require('../handlers/userHandler');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.use(bodyParser.json());

router.post('/register',validationMiddleware.validateRegister, userHandler.registerHandler);


module.exports = router;