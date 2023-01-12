const router = require('express').Router();
const { getUser, getAllUsers } = require('../controllers/users');

router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

module.exports = router;
