const ProductScores = require("../models/product_scores");
const NotFoundError = require("../errors/not-found-err");

const getProductScores = (req, res, next) => {
  ProductScores.findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError("product scores not found");
    })
    .then((productScores) => {
      if (productScores) {
        res.status(200).send({ data: productScores });
      }
    })
    .catch(next);
};

module.exports = {
  getProductScores,
};
