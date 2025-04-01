const router = require('express').Router();
const swagger = require('./swagger');

const ContactController = require('../controllers/contacts');

router.get('/', ContactController.getAll);
router.get('/:id', ContactController.get);

/* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Some description...',
    schema: {
        $name: 'John Doe',
        $age: 29,
        about: ''
    }
}*/
router.post('/', ContactController.post);

router.put('/:id', ContactController.put);

module.exports = router;