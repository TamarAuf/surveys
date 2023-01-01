const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUser, createUser, getAllUsers } = require('../controllers/users');

router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

router.post(
  '/create',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().required().min(2).max(30),
    }),
  }),
  createUser
);

module.exports = router;
