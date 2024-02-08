const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Rizal Mart',
    description: 'Description',
  },
  host: 'http://ec2-3-111-236-237.ap-south-1.compute.amazonaws.com/api/staging',
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/*.ts'];

swaggerAutogen(outputFile, routes, doc);
