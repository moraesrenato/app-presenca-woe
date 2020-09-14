const express = require('express');

const routes = express.Router();

const PlayerListController = require('./controllers/PlayerListController');
const PlayerController = require('./controllers/PlayerController');

routes.post('/addlista', PlayerListController.criar);
routes.get('/listas', PlayerListController.listas);
routes.get('/lista/:id', PlayerListController.lista); //????
routes.delete('/deletelista/:id', PlayerListController.deletelista);
routes.get('/listanomes/:id', PlayerListController.listanomes);

routes.post('/player/:id', PlayerController.criar);
routes.delete('/deleteplayer/:id/:id2', PlayerController.deleteplayer);

module.exports = routes;
