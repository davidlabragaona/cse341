const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts CRUD API',
    description: 'API that handles CRUD operations for contacts'
  },
  host: 'localhost:8080'
};

const outputFile = './swagger.json';
const routes = ['./routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);