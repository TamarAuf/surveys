const bcrypt = require("bcryptjs");

const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const NotFoundError = require("../errors/not-found-err");
const ConflictError = require("../errors/conflict-err");
const BadReqError = require("../errors/bad-req-err");

const getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById({_id: req.params.userId}) 
    .orFail(() => {
      throw new NotFoundError();
    })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      }
    }) 
    .catch((err) => {
      if(err.statusCode === 404) throw new NotFoundError("user not found")
      else throw new BadReqError(`Invalid id`);
    })   
    .catch(next);
};


const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        email,
        password: hash,
        name,
      }),
    )
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

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === "production" ? JWT_SECRET : "super-strong-secret",
        {
          expiresIn: "7d",
        },
      );
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  login,
};
