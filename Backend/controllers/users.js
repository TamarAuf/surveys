const User = require("../models/user");
const NotFoundError = require("../errors/not-found-err");
const ConflictError = require("../errors/conflict-err");
const BadReqError = require("../errors/bad-req-err");

const getAllUsers = (req, res, next) => {
  User.find()
    .orFail(() => {
      throw new NotFoundError("user not found");
    })
    .then((user) => {
      if (user) {
        res.status(200).send({ data: user });
      }
    })
    .catch(next);
};


const getUser = (req, res, next) => {
  User.findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError("user not found");
    })
    .then((user) => {
      if (user) {
        res.status(200).send({ data: user });
      }
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { email, name } = req.body;
  User.create({
    email,
    name,
  })
    .then((user) => {
      res.status(201).send({
        id: user._id,
        email: user.email,
        name: user.name,
      });
    })
    .catch((err) => {
      if (err.name === "MongoServerError") {
        throw new ConflictError(
          "The request could not be completed due to a conflict with the current state of the target resource",
        );
      } else if (err.name === "ValidationError") {
        throw new BadReqError("email and password required");
      }
    })
    .catch(next);
};

module.exports = {
  getUser,
  createUser,
  getAllUsers,
};
