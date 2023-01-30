const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { knnRec } = require("../controllers/knn_recommendation");

router.post(
  "/recommend-product",
  celebrate({
    body: Joi.object().keys({
      userScores: Joi.array().required(),
      productScoresList: Joi.array().required(),
    }),
  }),
  knnRec,
);

module.exports = router;
