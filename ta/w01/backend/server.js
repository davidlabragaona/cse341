//express web server
const express = require('express');
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});