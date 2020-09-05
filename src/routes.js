const express = require('express');

const routes = express.Router();

const PLController = require('./controllers/PLController');
const PlayerController = require('./controllers/PlayersController');

routes.post('/addlista', PLController.store);
routes.get('/listas', PLController.listas);
routes.delete('/deletelista', PLController.deletelista);


routes.get('/qtd', PlayerController.qtd);
routes.post('/player', PlayerController.store);
routes.get('/showplayers', PlayerController.showplayers);
routes.delete('/deleteplayer/:id', PlayerController.deleteplayer);
routes.get('/listanomes', PLController.listanomes);

module.exports = routes;
