const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  addCardLike,
  deleteCardLike,
  // eslint-disable-next-line no-unused-vars
  cardRout,
} = require('../controllers/cards');
const { validateCreateCard, validateCardId } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.get('/cards', auth, getCards);
router.post('/cards', auth, validateCreateCard, createCard);
router.delete('/cards/:cardId', auth, validateCardId, deleteCard);
router.put('/cards/:cardId/likes', auth, validateCardId, addCardLike);
router.delete('/cards/:cardId/likes', auth, validateCardId, deleteCardLike);
// router.get('*', cardRout);

module.exports = router;
