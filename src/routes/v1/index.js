const express = require('express');

const CityController = require('../../controllers/city-controller');

const Router = express.Router();
Router.post('/city', CityController.create);
Router.delete('/city/:id', CityController.destroy);
Router.get('/city/:id', CityController.get);
Router.patch('/city/:id', CityController.update);
module.exports = Router;