const router = require('express').Router();
const { getProductScores } = require('../controllers/product_scores');

router.get('/product_scores/:id', getProductScores);

module.exports = router;