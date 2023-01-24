const mongoose = require('mongoose');
const Recommendation = require("../models/recommendation");
const Response = require("../models/response");

const getRecommendation = (req, res, next) => {
  Recommendation.find({ response: req.params.responseId })
    .then((recommendation) => {
      if (recommendation.length) {
        res.status(200).send(recommendation);
      } else {
        res.status(404).send("recommendation not found");
      }
    })
    .catch(next);
};

const getAllRecommendations = (req, res, next) => {
  Recommendation.find()
    .then((recommendation) => {
      res.status(200).send(recommendation);
    })
    .catch(next);
};

const createRecommendation = (req, res, next) => {
  const { recommendations, feedback } = req.body;

  Response.findById(req.params.id)
    .then((response) => {
      if (response) {
        req.response = response;
        Recommendation.create({
          recommendations,
          feedback,
          date: new Date(),
          response: req.response._id,
        })
          .then((recommendation) => {
            response.recommendation = recommendation._id;
            response.save();
            res.status(201).send(recommendation);
          })
          .catch((error) => {           
              res.status(400).send("Response already has a recommendation");           
          })
          .catch(next);
      } else {
        res.status(404).send("Response not found");
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).send("Invalid response id");
      } else {
        res.status(500).send("Error occurred while querying the database");
      }
    })
    .catch(next);
};

module.exports = {
  getRecommendation,
  getAllRecommendations,
  createRecommendation,
};
