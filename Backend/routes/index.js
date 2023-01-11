/* eslint-disable linebreak-style */
const router = require('express').Router();

const users = require('./users');
const productScores = require('./product_scores');

router.use('/', users);
router.use('/', productScores);

module.exports = router;
