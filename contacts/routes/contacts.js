const router = require('express').Router();
const swagger = require('./swagger');

const ContactController = require('../controllers/contacts');

router.get('/', ContactController.getAll);
router.get('/:id', ContactController.get);
router.post('/', ContactController.createContact);
router.put('/:id', ContactController.updateContact);
router.delete('/:id', ContactController.deleteContact);

module.exports = router;