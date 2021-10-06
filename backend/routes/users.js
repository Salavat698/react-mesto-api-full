const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  // eslint-disable-next-line no-unused-vars
  getUsers, getUserById, updateUser, updateUserAvatar, getCurrentUser,
} = require('../controllers/users');
const { validateUserId, validateUpdateProfile, validateUpdateAvatar } = require('../middlewares/validators');

router.get('/users', auth, getUsers);
router.get('/users/me', auth, getCurrentUser);
router.get('/users/:userId', auth, validateUserId, getUserById);
router.patch('/users/me', auth, validateUpdateProfile, updateUser);
router.patch('/users/me/avatar', auth, validateUpdateAvatar, updateUserAvatar);

module.exports = router;
