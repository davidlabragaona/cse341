const express = require('express');
const router = require('./routes/contacts');
const mongodb = require('./db/connect')
const app = express();
const port = process.env.PORT || 8080;

app.use('/', router);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Database is listening and node running on port ${port}`)
        });
    }
});
