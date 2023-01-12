const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { createAuthResponse } = require("../controllers/responses");


router.post(
  "/createAuthResponse",
  celebrate({
    headers: Joi.object()
      .keys({
        authorization: Joi.string(),
      })
      .unknown(true),
    body: Joi.object().keys({
      B1Responses: Joi.object(),
      B2Responses: Joi.object(),
      B3Responses: Joi.object(),
      B4Responses: Joi.object(),
      B5Responses: Joi.object(),
      B6Responses: Joi.object(),
    }),
  }),
  createAuthResponse,
);

module.exports = router;
