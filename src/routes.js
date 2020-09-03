const express = require('express');

const routes = express.Router();

const PLController = require('./controllers/PLController');
const PlayerController = require('./controllers/PlayersController');

routes.post('/addlista', PLController.store);
routes.get('/listas', PLController.listas);
routes.delete('/deletelista', PLController.deletelista);


routes.post('/player', PlayerController.store);
routes.get('/showplayers', PlayerController.showplayers);
routes.delete('/deleteplayer', PlayerController.deleteplayer);

module.exports = routes;
