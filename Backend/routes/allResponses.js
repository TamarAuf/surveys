const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getResponseByUserId,  
  getAllResponses,
  createResponse,
} = require("../controllers/responses");

router.get("/responseByUser", getResponseByUserId);


router.get("/allResponses", getAllResponses);

router.post(
  "/createResponse",
  celebrate({
    body: Joi.object().keys({
      B1Responses: Joi.object(),
      B2Responses: Joi.object(),
      B3Responses: Joi.object(),
      B4Responses: Joi.object(),
      B5Responses: Joi.object(),
      B6Responses: Joi.object(),
    }),
  }),
  createResponse,
);

module.exports = router;
