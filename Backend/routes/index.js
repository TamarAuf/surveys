const router = require('express').Router();

const login = require('./login');
const signup = require('./signup');
const users = require('./users');
const productScores = require('./product_scores');

router.use('/', login);
router.use('/', signup);
router.use('/', users);
router.use('/', productScores);

module.exports = router;
