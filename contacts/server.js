const express = require('express');
const router = require('./routes/contacts');
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/', router);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Database is listening and node running on port ${port}`)
        });
    }
});
