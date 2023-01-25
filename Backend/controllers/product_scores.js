const NotFoundError = require("../errors/not-found-err");
const ProductScores = require("../models/product_scores");

const getAllProductScores = (req, res, next) => {
  ProductScores.find()
    .then((productScores) => {
      res.status(200).send(productScores);
    })
    .catch(next);
};

const getScoresByType = (req, res, next) => {
  ProductScores.find({ type: req.params.type })
    .orFail(() => {
      throw new NotFoundError("product not found");
    })
    .then((product) => {
      if (product) {
        res.status(200).send({ data: product });
      }
    })
    .catch(next);
};

const getProduct = (req, res, next) => {
  ProductScores.findById({ _id: req.params.productId })
    .orFail(() => {
      throw new NotFoundError("product not found");
    })
    .then((product) => {
      if (product) {
        res.status(200).send(product);
      }
    })
    .catch(next);
};

module.exports = {
  getAllProductScores,
  getScoresByType,
  getProduct,
};
