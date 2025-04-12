const router = require('express').Router();
//const swagger = require('./swagger');

const petController = require('../controllers/pet');

const { isAuthenticated} = require('../middleware/authenticate');

//#swagger.tags=['Developer']
router.get('/pets/', petController.listPets);
//#swagger.tags=['Developer']
router.get('/pets/:id', petController.getPet);
//#swagger.tags=['Developer']
router.post('/pets/', isAuthenticated, petController.createPet);
//#swagger.tags=['Developer']
router.put('/pets/:id', isAuthenticated, petController.updatePet);
//#swagger.tags=['Admin']
router.delete('/pets/:id', isAuthenticated, petController.deletePet);

module.exports = router;