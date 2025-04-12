const router = require('express').Router();
//const swagger = require('./swagger');

const appointmentController = require('../controllers/appointment');

const { isAuthenticated} = require('../middleware/authenticate');

//#swagger.tags=['Developer']
router.get('/appointments/', appointmentController.listAppointments);
//#swagger.tags=['Developer']
router.get('/appointments/:id', appointmentController.getAppointment);
//#swagger.tags=['Developer']
router.post('/appointments/', isAuthenticated, appointmentController.createAppointment);
//#swagger.tags=['Developer']
router.put('/appointments/:id', isAuthenticated, appointmentController.updateAppointment);
//#swagger.tags=['Admin']
router.delete('/appointment/:id', isAuthenticated, appointmentController.deleteAppointment);

module.exports = router;