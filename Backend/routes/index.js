const router = require('express').Router();
const auth = require('../middleware/auth');

const login = require('./login');
const signup = require('./signup');
const users = require('./users');
const productScores = require('./product_scores');
const authResponse = require('./createAuthResponse');
const allResponses = require('./allResponses');

router.use('/', signup);
router.use('/', allResponses);
router.use('/', users);
router.use('/', productScores);
router.use(auth);
router.use('/', login);
router.use('/', authResponse);

module.exports = router;
