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
        const playerList = await PlayerList.find().populate({
            path: 'players',
            options: { sort: { createdAt: -1 } }
        }).sort({ createdAt: -1 });

        return res.json(playerList);
    }

    async deletelista(req, res) {
        const listas = await PlayerList.findOneAndDelete().sort({ createdAt: -1 })
        return res.send('a ultima lista criada foi deletada com sucesso!');
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