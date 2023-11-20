const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userHandlers = require('../handlers/userHandlers');

router.use(bodyParser.json());

router.get('/users', userHandlers.addUserHandlers);
router.post('/login', userHandlers.loginUserHandlers);
router.put('/username', userHandlers.editUserHandlers);
router.delete('/delete', userHandlers.deleteUserHandlers);


module.exports = router;