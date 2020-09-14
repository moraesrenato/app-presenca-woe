const PlayerList = require('../models/PlayersList');

class PlayerListController {
    async criar(req, res) {

        if (!req.body.tittle || !req.body.date) {
            return res.status(400).send({ error: 'arruma isso ai que ta errado irmão!' });
        }
        
        const playerList = await PlayerList.create(req.body)

        return res.json(playerList);
    }

    async listas(req, res) {
        const playerList = await PlayerList.find().sort({ createdAt: -1 });

        return res.json(playerList);
    }

    async lista(req, res) {
        const playerList = await PlayerList.findOne({ id: req.params.id});

        return res.json(playerList);
    }

    async deletelista(req, res) {
        const listas = await PlayerList.findByIdAndDelete(req.params.id)
        return res.send('a lista foi deletada com sucesso!');
    }

    async listanomes(req, res) {
        const lista = await PlayerList.findOne().sort({ createdAt: -1 });
        let players = ""
        lista.players.forEach(element => {
            players += `${element.nick} - ${element.class}\n`
        });

        return res.send(players)
    }

}

module.exports = new PlayerListController();