const router = require('express').Router();
const { getAllProductScores, getScoresByType, getProduct } = require('../controllers/product_scores');

router.get('/product_scores', getAllProductScores);
router.get('/productByType/:type', getScoresByType);
router.get('/productByID/:productId', getProduct);


module.exports = router;