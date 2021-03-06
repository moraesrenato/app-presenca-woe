const Player = require('../models/Players');
const PlayerList = require('../models/PlayersList');

class PlayersController {
    async criar(req, res) {

        if (!req.body.nick || !req.body.class) {
            return res.status(400).send({ error: 'Arruma esse nick ai irmão' });
        }

        try {
            const playersList = await PlayerList.findById(req.params.id);
            const player = { ...req.body };

            playersList.players.push(player);

            await playersList.save();

            return res.json(player);
        } catch (err) {
            return res.status(500).send({ error: 'CRIA UMA LISTA PRIMEIRO, ANIMAL !' });
        };
    };

    async deleteplayer(req, res) {
        const playerList = await PlayerList.findById(req.params.id);

        playerList.players.remove({ _id: req.params.id2 });

        await playerList.save();

        return res.json('Confirmação deletada com sucesso... nem queria mesmo');
    }

}

module.exports = new PlayersController();