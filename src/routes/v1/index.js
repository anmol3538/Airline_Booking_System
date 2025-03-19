const express = require('express');
const { FlightMiddlewares } = require('../../middlewares/index')
const CityController = require('../../controllers/city-controller');

const FlightController = require('../../controllers/flight-controller');
const AirplaneController = require('../../controllers/airport-controller')
const Router = express.Router();
Router.post('/city', CityController.create);
Router.delete('/city/:id', CityController.destroy);
Router.get('/city/:id', CityController.get);
Router.get('/city', CityController.getAll)
Router.patch('/city/:id', CityController.update);

Router.post('/flight', FlightMiddlewares.validateCreateFlight, FlightController.create);
Router.get('/flight', FlightController.getAll);

Router.post('/airport', AirplaneController.create);
module.exports = Router;