const router = require('express').Router();
//const swagger = require('./swagger');

const petController = require('../controllers/pet');

//#swagger.tags=['Developer']
router.get('/pets/', petController.listPets);
//#swagger.tags=['Developer']
router.get('/pets/:id', petController.getPet);
//#swagger.tags=['Developer']
router.post('/pets/', petController.createPet);
//#swagger.tags=['Developer']
router.put('/pets/:id', petController.updatePet);
//#swagger.tags=['Admin']
router.delete('/pets/:id', petController.deletePet);

module.exports = router;