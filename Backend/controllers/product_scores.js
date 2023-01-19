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
  ProductScores.find({type : req})
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
  ProductScores.findById(req.params.id)
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

module.exports = {
  getAllProductScores,
  getScoresByType,
  getProduct
};
