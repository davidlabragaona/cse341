//const router = require('express').Router();
const app = require('express')();

const passport = require('passport');
const appointmentRouter = require('./appointment.js');
const petRouter = require('./pet.js');

//we can do:
//const appointmentRouter = require('./appointment.js');
//const petRouter = require('./pet.js');
//and then module.exports = [appointmentRouter, petRouter];
//
//or
//we can handle some routes here declaring a const router and doing:
//router.use("/pets", petRouter);
//router.use("/appointments", appointmentRouter);

app.use('/pets', petRouter);
app.use('/appointments', appointmentRouter);

app.get('/login',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

app.get('/logout', (req, res) => {
    req.logout(() => {
      res.redirect('/');
    });
  });

module.exports = [appointmentRouter, petRouter, app];