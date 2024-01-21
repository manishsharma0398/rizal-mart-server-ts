const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Rizal Mart',
    description: 'Description',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/*.ts'];

swaggerAutogen(outputFile, routes, doc);
