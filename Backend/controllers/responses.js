const Response = require("../models/response");

const getResponse = (req, res, next) => {
  Response.find({ userID: req.user._id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
};

const getAllResponses = (req, res, next) => {
  Response.find()
    .then((responses) => {
      res.status(200).send(responses);
    })
    .catch(next);
};

const createAuthResponse = (req, res, next) => {
  const {
    B1Responses,
    B2Responses,
    B3Responses,
    B4Responses,
    B5Responses,
    B6Responses,
  } = req.body;

  Response.create({
    B1Responses,
    B2Responses,
    B3Responses,
    B4Responses,
    B5Responses,
    B6Responses,
    userID: req.user._id,
  })
    .then((response) => {
      res.status(201).send(response);
    }) 
    .catch(next);
};

const createResponse = (req, res, next) => {
  const {
    B1Responses,
    B2Responses,
    B3Responses,
    B4Responses,
    B5Responses,
    B6Responses,
  } = req.body;

  Response.create({
    B1Responses,
    B2Responses,
    B3Responses,
    B4Responses,
    B5Responses,
    B6Responses,
  })
    .then((response) => {
      res.status(201).send(response);
    }) 
    .catch(next);
};

module.exports = {
  getResponse,
  getAllResponses,
  createAuthResponse,
  createResponse,
};
