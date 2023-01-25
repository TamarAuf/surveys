const router = require('express').Router();
const auth = require('../middleware/auth');

const login = require('./login');
const signup = require('./signup');
const users = require('./users');
const allResponses = require('./allResponses');
const product_scores = require('./product_scores')
const recommedation = require('./recommedation')
const authResponse = require('./createAuthResponse');

router.use('/', signup);
router.use('/', allResponses);
router.use('/', users);
router.use('/', product_scores);
router.use('/', recommedation);
router.use(auth);
router.use('/', login);
router.use('/', authResponse);

module.exports = router;
