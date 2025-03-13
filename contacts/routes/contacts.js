const router = require('express').Router();

const ContactController = require('../controllers/contacts');

router.get('/', ContactController.getAll);
router.get('/:id', ContactController.get);

module.exports = router;