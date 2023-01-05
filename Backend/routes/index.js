const router = require('express').Router();

const login = require('./login');
const signup = require('./signup');
const users = require('./users');

router.use('/', login);
router.use('/', signup);
router.use('/', users);

module.exports = router;
