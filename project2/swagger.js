const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Pet CRUD API',
    description: 'API that handles CRUD operations for pet and vet appointments'
  },
  //host: 'localhost:8080',
  host: 'project2-2epv.onrender.com',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const routes = ['./routes/appointment', './routes/pet'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);