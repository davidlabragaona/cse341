const router = require('express').Router();
const swagger = require('./swagger');

const ContactController = require('../controllers/contacts');

//#swagger.tags=['Developer']
router.get('/', ContactController.getAll);
//#swagger.tags=['Developer']
router.get('/:id', ContactController.get);
//#swagger.tags=['Developer']
router.post('/', ContactController.createContact);
//#swagger.tags=['Developer']
router.put('/:id', ContactController.updateContact);
//#swagger.tags=['Admin']
router.delete('/:id', ContactController.deleteContact);

module.exports = router;