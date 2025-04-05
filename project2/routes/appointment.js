const router = require('express').Router();
//const swagger = require('./swagger');

const appointmentController = require('../controllers/appointment');

//#swagger.tags=['Developer']
router.get('/appointments/', appointmentController.listAppointments);
//#swagger.tags=['Developer']
router.get('/appointments/:id', appointmentController.getAppointment);
//#swagger.tags=['Developer']
router.post('/appointments/', appointmentController.createAppointment);
//#swagger.tags=['Developer']
router.put('/appointments/:id', appointmentController.updateAppointment);
//#swagger.tags=['Admin']
router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = router;