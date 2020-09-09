const express = require('express');

const routes = express.Router();

const PlayerListController = require('./controllers/PlayerListController');
const PlayerController = require('./controllers/PlayerController');

routes.post('/addlista', PlayerListController.criar);
routes.get('/listas', PlayerListController.listas);
routes.delete('/deletelista', PlayerListController.deletelista);


routes.get('/qtd', PlayerController.qtd);
routes.post('/player', PlayerController.criar);
// routes.get('/showplayers', PlayerController.showplayers);
routes.delete('/deleteplayer/:id', PlayerController.deleteplayer);
routes.get('/listanomes', PlayerListController.listanomes);

module.exports = routes;
