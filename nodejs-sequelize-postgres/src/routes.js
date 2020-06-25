const express = require('express');
const UserController  = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressesController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressesController.store);
routes.get('./users/:user_id/addresses', AddressesController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('./users/:user_id/techs', TechController.index);
routes.delete('./users/:user_id/techs', TechController.destroy);

routes.get('/report', ReportController.show);

module.exports = routes;
