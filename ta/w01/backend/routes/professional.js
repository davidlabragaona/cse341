const routes = require('express').Router();
const professionalController = require('../controllers/professional');

routes.get('/', professionalController.professionalData);
routes.get('/professional', professionalController.professionalData);

module.exports = routes;