const router = require('express').Router();
const { getAllProductScores, getScoresByType, getProduct } = require('../controllers/product_scores');

router.get('/product_scores', getAllProductScores);
router.get('/product_scores/:type', getScoresByType);
router.get('/product_scores/:id', getProduct);

module.exports = router;