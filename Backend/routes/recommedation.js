const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getRecommendation,
  getAllRecommendations,
  createRecommendation,
} = require("../controllers/recommendations");

router.get("/recommendation/:responseId", getRecommendation);

router.get("/allRecommendations", getAllRecommendations);

router.post(
  "/responses/:id/recommendations",
  celebrate({
    body: Joi.object().keys({
      recommendations: Joi.object(),
      feedback: Joi.string(),
    }),
  }),
  createRecommendation,
);

module.exports = router;
