const router = require('express').Router();
const { getProductScores, getAllProductScores } = require('../controllers/users');

router.get('/product_scores/:id', getProductScores);

module.exports = router;